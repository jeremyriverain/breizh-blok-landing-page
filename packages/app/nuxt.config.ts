import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "nprogress/nprogress.css"],
  vite: {
        plugins: [tailwindcss()],
  },
  routeRules: {
    "/boulders/**": { redirect: { to: "/", statusCode: 301 } },
    "/boulder-areas/**": { redirect: { to: "/", statusCode: 301 } },
    "/municipalities/**": { redirect: { to: "/", statusCode: 301 } },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/devtools", "@nuxtjs/i18n"],
  compatibilityDate: "2024-07-31",

  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "🇬🇧 EN",
        file: "en.ts",
      },
      {
        code: "fr",
        language: "fr-FR",
        name: "🇫🇷 FR",
        file: "fr.ts",
      },
    ],
    defaultLocale: "fr",
    baseUrl: "https://breizh-blok.fr",
    detectBrowserLanguage: false,
  },
});
