import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const listOfCategories = [
  "Tutorials and Guides",
  "Problem and solution",
  "Projects and Case Studies",
  "Learning and Growth",
  "Insights and Best practices",
  "Resource Tools",
];

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(listOfCategories),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
