// @ts-ignore
import { useRuntimeConfig } from "#imports";
import { defineEventHandler, getCookie, setCookie, deleteCookie } from "h3";
import type { ModuleRuntimeConfig } from "../../../module";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig().auth as ModuleRuntimeConfig;

  /**
   * If the module is not enabled, or no users are defined, or the current route is allowed, do nothing.
   */
  if (
    !config.enabled ||
    !config.cbaPrefix ||
    config.allowedRoutes?.some((route) => {
      const regex = new RegExp(route);

      return regex.test(event.node.req?.url || "");
    })
  ) {
    return;
  }

  let authenticated = false;

  /**
   * Get the authToken from the Authorization token local storage.
   */
  const authToken = getCookie(event, "authentication.token");

  if (authToken) {
    /**
     * Note this setCookie will not work in initial requests,hence set cookie in authFetch.
     * Server middleware cookies on initial page serve in nuxt 3 #2187
     * https://github.com/nuxt/nuxt/issues/21875
     */
    setCookie(event, config.cbaPrefix + ".cba.token", authToken, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    authenticated = true;
    //delete console logs in production
    console.log("CBA: 200 OK - cookie set");
  }

  /**
   * If token are not defined, delete auth cookie
   */
  if (!authenticated) {
    deleteCookie(event, config.cbaPrefix + ".cba.token");
    deleteCookie(event, "authentication.token");
    //delete console logs in production
    console.log("CBA: 401 Unauthorized - cookie deleted");
  }
});
