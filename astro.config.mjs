// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://clintonsteiner.com",
  integrations: [
    starlight({
      title: "Half Stack Python",
      social: {
        github: "https://github.com/clintonsteiner/blog",
      },
      logo: {
        src: "./src/assets/c3po.jpg",
      },
      sidebar: [
        {
          label: "Programming",
          autogenerate: { directory: "programming" },
        },
      ],
    }),
  ],
});
