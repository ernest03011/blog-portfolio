export type Page = {
  title: string;
  description: string;
};

export type PageKey = "home" | "blog" | "about";

export const Pages: Record<PageKey, Page> = {
  home: { title: "I'm manuel.djs | Homepage", description: "A page where you will find my posts. I write about my experience in the continuously changing tech landscape, what I learn, and tech-related stuff that interests me, etc." },
  blog: { title: "I'm manuel.djs | Blog", description: "A page where you will find my posts. I write about my experience in the continuously changing tech landscape, what I learn, and tech-related stuff that interests me, etc." },
  about: { title: "I'm manuel.djs | About Me", description: "Use this page to find information about my professional experience. Also, you can find a summary of my tech-related skills." },
};
