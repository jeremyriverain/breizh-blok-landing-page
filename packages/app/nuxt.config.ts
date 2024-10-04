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

  modules: ["nuxt-icon", "@nuxt/devtools"],
  compatibilityDate: "2024-07-31",
});
