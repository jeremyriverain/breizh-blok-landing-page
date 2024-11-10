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
    locales: ["en", "fr"],
    defaultLocale: "fr",
    vueI18n: "./i18n.config.ts",
  },
});