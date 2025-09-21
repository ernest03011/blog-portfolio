// Run this command to generate base config and vs code settings:
// pnpm dlx @antfu/eslint-config@latest
// https://gist.github.com/w3cj/21b1f1b4857ecd13d076075a5c5aaf13

import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  typescript: true,
  react: true,
  astro: true,
  unocss: true, // TailwindCSS support via UnoCSS
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: [
        "README.md",
        ".astro",
      ],
    }],
    "style/brace-style": ["error", "1tbs"],
  },
});