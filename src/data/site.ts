export type Author = {
  name: string;
  bioSummary: string;
};

export type Site = {
  title: string;
  author: Author;
};

export const Site: Site = {
  title: "manuel.djs",
  author: {
    name: "Manuel De Jesús",
    bioSummary: "I'm Manuel De Jesús (manuel.djs). A software developer who has worked as technical support. That role allowed me to provide support to customers in websites (mostly php-based ones, WordPress, Laravel, etc.). Moreover, I've worked with React and Astro.js either for freelancing purpose or personal projects. This is a place to share my experience, learn by sharing, and an excuse to write. I will share posts on Tuesday.",
  },
};
