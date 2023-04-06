import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => {
    return z.object({
      banner: image(),
    });
  }
});

export const collections = {
  blog: blogCollection,
};
