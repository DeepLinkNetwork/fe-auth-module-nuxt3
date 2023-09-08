import { defineNuxtConfig } from "nuxt/config";
import module from "../src/module";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", module],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
  feAuthModuleNuxt3: {
    enabled: true,
    cbaPrefix: process.env.CBA_PREFIX || "test",
  },
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available within server-side
    baseUrl: process.env.BASE_URL || "http://test-v2-api.wellcertified.com",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "http://test-v2-api.wellcertified.com",
    },
  },
});
