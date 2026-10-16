import { getCollection } from 'astro:content'

// Markdown views for agents (served for Accept: text/markdown, see vercel.json).
export async function latestPosts(limit) {
  return (await getCollection('blog'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit)
}

export const postLine = (post, site) =>
  `- [${post.data.title}](${new URL(`/blog/${post.id}/`, site)}): ${post.data.description}`
