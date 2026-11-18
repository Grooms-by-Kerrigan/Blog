// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Published as a GitHub Pages project site at https://grooms-by-kerrigan.github.io/
	site: 'https://grooms-by-kerrigan.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'DM Sans',
			cssVariable: '--font-dm-sans',
			weights: [400, 500, 600, 700],
			fallbacks: ['Arial', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Playfair Display',
			cssVariable: '--font-playfair',
			weights: [500, 600, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
});
