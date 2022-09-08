import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Year In Music',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ["@/assets/main.css"],
  autoImports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      contentfulSpace: process.env.NUXT_CONTENTFUL_SPACE,
      contentfulPublicAccessToken:
        process.env.NUXT_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN
    },
  },
  build: {
    transpile:
      process.env.npm_lifecycle_script === "nuxt generate"
        ? ["contentful"]
        : [],
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    },
  },
});
