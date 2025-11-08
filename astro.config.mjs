import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

export default defineConfig({
  site: "https://manueldjs.online",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    csp: true,
  },
  integrations: [mdx(), // Icon integration requires specific setting when using server or hybrid
  // to avoid that all icons from the library (mdi is being used) are installed
  // https://www.astroicon.dev/reference/configuration/
    icon({
      iconDir: "src/assets/icons",
    }), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
