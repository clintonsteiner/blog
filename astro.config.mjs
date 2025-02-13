// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://clintonsteiner.com",
  integrations: [
    starlight({
      title: "Half Stack Python",
      editLink: {
        baseUrl: "https://github.com/clintonsteiner/blog/edit/master/",
      },
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
