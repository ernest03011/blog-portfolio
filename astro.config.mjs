// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";


import sitemap from "@astrojs/sitemap";


export default defineConfig({
  site: 'https://manueldjs.online',
  vite: {
    plugins: [tailwindcss()],
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