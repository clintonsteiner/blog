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
        linkedin: "https://www.linkedin.com/in/clintonsteiner/",
      },
      logo: {
        src: "./src/assets/c3po.jpg",
      },
      sidebar: [
        {
          label: "Programming",
          collapsed: true,
          autogenerate: { directory: "programming" },
        },
        {
          label: "Resonance Textbook",
          collapsed: true,
          items: [
            { label: "Textbook Chapters", link: "resonance" },
            {
              label: "Resonance V7 Textbook",
              link: "/resonances/resonance-v7.pdf",
            },

            {
              label: "Appendix",
              collapsed: true,
              items: [
                {
                  label: "A1: Definition of Terms",
                  link: "/resonances/appendix/Appendices_Definition_of_Terms.pdf",
                },
                {
                  label: "A2: Instruments of the Orchestra",
                  link: "/resonances/appendix/Appendices_Instruments_of_the_Orchestra.pdf",
                },
                {
                  label: "A3: Western Art Music",
                  link: "/resonances/appendix/Appendices_Western_Art_Music.pdf",
                },
              ],
            },
            {
              label: "Unit 1: Music as a Field of Practice and Study",
              collapsed: true,
              items: [
                {
                  label: "Chapter 1.1: Music in Human Life",
                  link: "/resonances/unit1/Unit1_Chapter1_Music_in_Human_Life.pdf",
                },
                {
                  label: "Chapter 1.2: The Elements of Music",
                  link: "/resonances/unit1/Unit1_Chapter2_The_Elements_of_Music.pdf",
                },
              ],
            },
            {
              label: "Unit 2: Music for Storytelling",
              collapsed: true,
              items: [
                {
                  label: "Chapter 2.3: Music and Characterization",
                  link: "/resonances/unit2/Unit2_Chapter3_Music_and_Characterization.pdf",
                },
                {
                  label: "Chapter 2.4: Sung and Danced Drama",
                  link: "/resonances/unit2/Unit2_Chapter4_Sung_and_Danced_Drama.pdf",
                },
                {
                  label: "Chapter 2.5: Song",
                  link: "/resonances/unit2/Unit2_Chapter5_Song.pdf",
                },
                {
                  label: "Chapter 2.6: Stories without Words: Introduction",
                  link: "/resonances/unit2/Unit2_Chapter6_Stories_without_Words_Introduction.pdf",
                },
              ],
            },
            {
              label: "Unit 3: Music in Context",
              collapsed: true,
              items: [
                {
                  label:
                    "Chapter 3.7: Listening at Public Concerts: Introduction",
                  link: "/resonances/unit3/Unit3_Chapter7_Listening_at_Public_Concerts_Introduction.pdf",
                },
                {
                  label:
                    "Chapter 3.8: Listening at Home and at Court: Introduction",
                  link: "/resonances/unit3/Unit3_Chapter8_Listening_at_Home_and_at_Court_Introduction.pdf",
                },
              ],
            },
            {
              label: "Unit 4: Music for Political Expression",
              collapsed: true,
              items: [
                {
                  label: "Chapter 4.9: National Identity",
                  link: "/resonances/unit4/Unit4_Chapter9_National_Identity.pdf",
                },
                {
                  label: "Chapter 4.10: Support and Protest",
                  link: "/resonances/unit4/Unit4_Chapter10_Support_and_Protest.pdf",
                },
              ],
            },
            {
              label: "Unit 5: Functional Music",
              collapsed: true,
              items: [
                {
                  label: "Chapter 5.11: Music for Spiritual Expression",
                  link: "/resonances/unit5/Unit5_Chapter11_Music_for_Spiritual_Expression.pdf",
                },
                {
                  label: "Chapter 5.12: Music for Moving",
                  link: "/resonances/unit5/Unit5_Chapter12_Music_for_Moving.pdf",
                },
              ],
            },
            {
              label: "Unit 6: Evaluating Music",
              collapsed: true,
              items: [
                {
                  label: "Chapter 6.13: What is Good Music?",
                  link: "/resonances/unit6/Unit6_Chapter13_What_is_Good_Music.pdf",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
