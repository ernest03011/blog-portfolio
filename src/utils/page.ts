import type { PageKey } from "@data/pages";

import { Pages } from "@data/pages";

function getPageKey(pathname: string): PageKey {
  const key = pathname === "/" ? "home" : pathname.split("/")[1] as PageKey;
  return key in Pages ? key : "home";
};

export { getPageKey };
