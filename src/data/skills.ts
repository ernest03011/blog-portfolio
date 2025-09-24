type iconName = `mdi:${string}`;

export type Skills = {
  title: string;
  description: string;
  iconName: iconName;
};

export const Skills: Skills[] = [
  { title: "Frontend", description: "React, Astro.js, Typescript, JavaScript, Vite", iconName: "mdi:laptop" },
  { title: "Backend and APIs", description: "PHP, REST APIs, Laravel ORM", iconName: "mdi:laptop" },
  { title: "Databases and Infrastructure", description: "MYSQL, Managed Hosting (cPanel)", iconName: "mdi:laptop" },
  { title: "Testing and Quality", description: "PHPUnit, PHPstan, static analysis, and coding standards tool", iconName: "mdi:laptop" },
  { title: "Tooling and DevOps", description: "GitHub Actions, Cloudflare", iconName: "mdi:laptop" },
  { title: "Collaboration", description: "Slack, Jira, GitHub Issues", iconName: "mdi:laptop" },
  { title: "Soft Skills", description: "Communication, Collaboration, Problem-Solving, Curiosity, Continuous learning, Attention to Details", iconName: "mdi:laptop" },
  { title: "Languages", description: "Spanish (native), English (Full professional proficiency)", iconName: "mdi:laptop" },
];
