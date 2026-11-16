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

// Keep wide Markdown tables independently scrollable and keyboard accessible.
function wrapTables() {
	/** @param {any} node */
	const walk = (node) => {
		if (!node.children) return;
		node.children = node.children.map((child) => {
			if (child.type === 'element' && child.tagName === 'table') {
				return {
					type: 'element',
					tagName: 'div',
					properties: { className: ['table-scroll'], role: 'region', ariaLabel: 'Tabel data, geser untuk melihat seluruh kolom', tabIndex: 0 },
					children: [child],
				};
			}
			walk(child);
			return child;
		});
	};
	return walk;
}

// https://astro.build/config
export default defineConfig({
	site: 'https://pintar-blog.vercel.app',
	markdown: { remarkPlugins: [demoteH1], rehypePlugins: [wrapTables] },
	integrations: [mdx(), sitemap()],
	redirects: { '/blog': '/' },
});
