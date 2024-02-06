import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  
  integrations: [tailwind()],
  integrations: [icon()],
  
  
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

});

