import { defineNuxtConfig } from "nuxt/config";
import module from "../src/module";

export default defineNuxtConfig({
  modules: [module],
  feAuthModuleNuxt3: {
    enabled: true,
    cbaPrefix: process.env.CBA_PREFIX || "test",
  },
  devtools: { enabled: true },
});
