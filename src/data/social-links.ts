type iconName = `mdi:${string}`;

export type SocialLinks = {
  href: string;
  iconName: iconName;
  srMessage: string;
};

export const SocialLinks: SocialLinks[] = [
  { href: "https://www.linkedin.com/in/manueldjesus/", iconName: "mdi:linkedin", srMessage: "Go to my Linkedin profile" },
  { href: "https://github.com/ernest03011", iconName: "mdi:github", srMessage: "Go to my GitHub repo" },
];
