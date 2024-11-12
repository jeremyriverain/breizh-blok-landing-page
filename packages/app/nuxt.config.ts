// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "nprogress/nprogress.css"],

  routeRules: {
    "/boulders/**": { redirect: { to: "/", statusCode: 301 } },
    "/boulder-areas/**": { redirect: { to: "/", statusCode: 301 } },
    "/municipalities/**": { redirect: { to: "/", statusCode: 301 } },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/devtools", "@nuxtjs/i18n", "@nuxt/icon"],
  compatibilityDate: "2024-07-31",

  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.ts",
      },
      {
        code: "fr",
        language: "fr-FR",
        file: "fr.ts",
      },
    ],
    defaultLocale: "fr",
    baseUrl: "https://breizh-blok.fr",
  },
});
