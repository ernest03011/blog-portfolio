

const themeColors = {
  'deep-sea': '#122340',
  'powder-blue': '#d6e3f5',
  'lemon-sorbet': '#feffa1',
  'royal-purple': '#432183',
  'electric-lime': '#a2ec45',
  'light-steel-blue': '#a8bfd9',
  'dark-slate-blue': '#1a2d4a',
  'midnight-blue': '#203354',
  'slate-gray': '#2a3f5f',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': themeColors['lemon-sorbet'],
        'secondary': themeColors['royal-purple'],
        'accent': themeColors['electric-lime'],
        'surface': themeColors['deep-sea'],
        'surface-elevated': themeColors['dark-slate-blue'],
        'surface-hover': themeColors['midnight-blue'],
        'divider': themeColors['slate-gray'],
        'muted': themeColors['light-steel-blue'],
        'content': themeColors['powder-blue'],
      },
    }
  }
}