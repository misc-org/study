import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const production = process.env.NODE_ENV === "production";

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
      base: production ? "/study" : "",
    },
  },
};

export default config;
