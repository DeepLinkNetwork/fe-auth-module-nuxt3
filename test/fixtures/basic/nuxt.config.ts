import MyModule from "../../../src/module";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      secret: process.env.CBA_PREFIX,
    },
  },
  modules: [MyModule],
  devtools: { enabled: true },
});
