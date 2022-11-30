import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import tailwind from "tailwindcss";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			"$slices": "./prismic/slices",
			"$css": "./src/css",
			"$js": "./src/js"
		},
		prerender: {
			crawl: true,
			entries: []
		}
	},
	preprocess: preprocess({
		postcss: {
			plugins: tailwind
		},
		scss: {},
		preserve: ["ld+json"]
	})
};

export default config;
