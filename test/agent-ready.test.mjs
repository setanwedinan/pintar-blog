// Checks the agent-facing build output. Run `npm run build` first.
// Set BASE_URL to also check a deployed site (e.g. a Vercel preview).
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const dist = f => readFileSync(new URL(`../dist/${f}`, import.meta.url), 'utf8')

test('homepage markdown lists posts', () => {
  const md = dist('index.md')
  assert.match(md, /^# Pintar AI Blog/)
  assert.match(md, /\]\(https:\/\/pintar-blog\.vercel\.app\/blog\//)
})

test('404 markdown explains and links llms.txt', () => {
  const md = dist('404.md')
  assert.ok(md.length >= 20)
  assert.match(md, /\/llms\.txt/)
})

test('llms.txt follows llmstxt.org layout', () => {
  const txt = dist('llms.txt')
  assert.match(txt, /^# .+\n\n> .+/)
  assert.match(txt, /^## .+\n\n- \[.+\]\(https?:\/\/.+\)/m)
})

test('homepage has Blog JSON-LD', () => {
  const html = dist('index.html')
  const raw = html.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/s
  )?.[1]
  const ld = JSON.parse(raw)
  assert.equal(ld['@type'], 'Blog')
  assert.equal(ld.url, 'https://pintar-blog.vercel.app/')
})

test('vercel.json negotiates markdown around the filesystem', () => {
  const { routes } = JSON.parse(
    readFileSync(new URL('../vercel.json', import.meta.url), 'utf8')
  )
  const fs = routes.findIndex(r => r.handle === 'filesystem')
  const home = routes.findIndex(r => r.dest === '/index.md')
  const miss = routes.findIndex(r => r.dest === '/404.md')
  assert.ok(home >= 0 && home < fs, 'homepage rewrite must beat index.html')
  assert.ok(miss > fs, '404 fallback must come after real files')
  assert.equal(routes[miss].status, 404)
  for (const i of [home, miss])
    assert.equal(
      routes[i].headers['Content-Type'],
      'text/markdown; charset=utf-8'
    )
})

const base = process.env.BASE_URL
test('deployed endpoints', { skip: !base }, async () => {
  const get = (path, accept) =>
    fetch(new URL(path, base), { headers: { accept } })

  let r = await get('/', 'text/markdown')
  assert.equal(r.status, 200)
  assert.match(r.headers.get('content-type'), /^text\/markdown/)
  assert.match(r.headers.get('vary') ?? '', /accept/i)
  assert.match(await r.text(), /^# Pintar AI Blog/)

  r = await get('/', 'text/html')
  assert.match(r.headers.get('content-type'), /^text\/html/)
  assert.match(r.headers.get('vary') ?? '', /accept/i)

  r = await get('/__agent-404-probe', 'text/markdown')
  assert.equal(r.status, 404)
  assert.match(r.headers.get('content-type'), /^text\/markdown/)
  assert.match(await r.text(), /llms\.txt/)

  r = await get('/about/', 'text/html')
  assert.equal(r.status, 200)

  r = await get('/llms.txt')
  assert.equal(r.status, 200)
  assert.match(await r.text(), /^# Pintar AI Blog/)
})
