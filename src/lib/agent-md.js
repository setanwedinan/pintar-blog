import { getCollection } from 'astro:content'

// Markdown views for agents (served for Accept: text/markdown, see vercel.json).
export async function latestPosts(limit) {
  return (await getCollection('blog'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit)
}

// One list item per post: escape brackets, keep it on one line.
const oneLine = s => s.replace(/\s+/g, ' ').trim()
export const postLine = (post, site) =>
  `- [${oneLine(post.data.title).replace(/[[\]]/g, '\\$&')}](${new URL(`/blog/${post.id}/`, site)}): ${oneLine(post.data.description)}`
