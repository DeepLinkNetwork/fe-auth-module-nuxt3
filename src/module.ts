import {
  defineNuxtModule,
  createResolver,
  addImports,
  addPlugin,
  addServerHandler,
} from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  enabled?: boolean;
  cbaPrefix?: string;
  cbaAuthToken?: string;
  allowedRoutes?: string[];
}

// Runtime config TypeScript interface definition
export type ModuleRuntimeConfig = ModuleOptions;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "fe-auth-module-nuxt3",
    configKey: "feAuthModuleNuxt3",
  },

  defaults: {
    enabled: true,
    cbaPrefix: "test",
    allowedRoutes: [],
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.auth = defu(
      nuxt.options.runtimeConfig.auth || {},
      options
    );

    if (options.enabled) {
      addServerHandler({
        middleware: true,
        handler: resolver.resolve("./runtime/server/middleware/auth"),
      });
    }

    // Add auto imports
    const authComposables = resolver.resolve("./runtime/composables/authFetch");
    const userComposables = resolver.resolve("./runtime/composables/userFetch");
    const apiComposables = resolver.resolve("./runtime/composables/apiFetch");
    addImports([{ from: authComposables, name: "authFetch" }]);
    addImports([{ from: authComposables, name: "authLogout" }]);
    addImports([{ from: userComposables, name: "userFetch" }]);
    addImports([{ from: apiComposables, name: "apiFetch" }]);

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
