// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// The BlogPost layout already renders the title as <h1>, so `#` in a post body becomes <h2>.
function demoteH1() {
	/** @param {any} node */
	const walk = (node) => {
		if (node.type === 'heading' && node.depth === 1) node.depth = 2;
		node.children?.forEach(walk);
	};
	return walk;
}

// https://astro.build/config
export default defineConfig({
	site: 'https://pintar-blog.vercel.app',
	markdown: { remarkPlugins: [demoteH1] },
	integrations: [mdx(), sitemap()],
	redirects: { '/blog': '/' },
});
