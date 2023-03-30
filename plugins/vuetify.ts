import { createVuetify } from "vuetify";
import { custom, aliases } from "@/helpers/customIcons";
import { defaults } from "~~/helpers/defaults";
import { mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    components,
    directives,
    // add theme
    theme: {
      defaultTheme: "dark",
      // add color variations
      variations: {
        colors: ["primary", "secondary"],
        lighten: 3,
        darken: 3,
      },
    },
    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        mdi,
        custom,
      },
    },
  });

  app.vueApp.use(vuetify);
});
