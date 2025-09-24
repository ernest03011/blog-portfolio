export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const Nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
