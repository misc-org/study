import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "dist",
			assets: "dist",
			fallback: undefined,
			precompress: false,
			strict: true,
		}),

		paths: {
			base: production ? '/misc-org/misc-study' : '',
		},
	},

	onwarn: (warning, handler) => {
		const { code } = warning;

		if (code === "css-unused-selector") {
			return;
		}

		handler(warning);
	},
};

export default config;
