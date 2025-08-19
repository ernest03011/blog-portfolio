# Personal Blog + Portfolio Website

This is a website that I will use to document my journey and write about technologies I have used, reflect about certain tech topics and so on.

---

## Features

- Built with [Astro.js](https://astro.build/)
- Content written in **MDX**

---

### Tech Stack

- [Astro.js](https://astro.build/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Blog content
- Hosting: [Cloudflare Pages](https://www.cloudflare.com/)
- [Astro Icons](https://www.astroicon.dev/) - Package for handling Icons in Astro
- [Material Design Icon Library](https://icones.js.org/collection/mdi)
- [Sharp](https://docs.astro.build/en/guides/images/#default-image-service) - This image processing library needs to be installed when pnpm is used in order to avoid issues when deploying the website

---

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm, npm or yarn

### Installation

Clone the repository:

```bash
git clone git@github.com:ernest03011/blog-portfolio.git
cd blog-portfolio
```

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the build:

```bash
pnpm preview
```

---

## Project Structure

```bash
├── public/                      # Static files served as-is (favicon, robots.txt, static images)
│
├── src/                         # Main source code
│   ├── assets/                  # Project assets not directly in public
│   │   ├── icons/               # SVG or icon files
│   │   └── images/              # Images used in the site
│   │
│   ├── components/              # Reusable UI components (buttons, navbars, cards, etc.)
│   ├── layouts/                 # Page layouts/templates (blog layout, base layout, etc.)
│   ├── pages/                   # Astro route-based pages (index.astro, about.astro, etc.)
│   ├── styles/                  # Global or modular CSS/Tailwind overrides
│   └── content/                 # Structured content (using Astro Content Collections)
│       ├── blog/                # Blog posts (MD/MDX files)
│       └── config.ts            # Content schema/configuration for Astro content collections
│
├── .gitignore                   # Files/folders ignored by Git
├── .prettierrc                  # Prettier configuration (code formatting rules)
├── astro.config.mjs             # Astro project configuration
├── package.json                 # Project dependencies and scripts
├── pnpm-lock.yaml               # Lockfile for pnpm (ensures consistent installs)
├── README.md                    # Project documentation
├── tailwind.config.js           # TailwindCSS configuration

```

## Roadmap

- Add RSS feed
- Add "Projects" page
- Integrate CMS (Contentful/Sanity/WordPress headless)
- Add comments section
- Improve SEO with structured data
