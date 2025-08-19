// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(), 
    // Icon integration requires specific setting when using server or hybrid 
    // to avoid that all icons from the library (mdi is being used) are installed
    // https://www.astroicon.dev/reference/configuration/
    icon({
      iconDir: "src/assets/icons",
    })
  ],
});