import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";

export default defineNuxtPlugin(() => {
  console.log("Plugin injected by fe-auth-module-nuxt3 !!");
  const config = useRuntimeConfig();
  console.log("API base URL:", config.public.apiBase);
  const apiBaseUrl: any = config.public.apiBase;
  return {
    provide: {
      apiBaseUrl: () => apiBaseUrl,
    },
  };
});
