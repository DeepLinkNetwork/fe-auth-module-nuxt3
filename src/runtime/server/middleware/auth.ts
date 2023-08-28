import { useRuntimeConfig } from "#imports";
import {
  defineEventHandler,
  getCookie,
  setCookie,
  createError,
  sendError,
} from "h3";
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
   * Get the authToken from the Authorization cookie.
   */
  const authToken = getCookie(event, "authentication.token");

  if (authToken) {
    setCookie(event, config.cbaPrefix + ".cba.token", authToken);
    authenticated = true;
  }

  /**
   * If token are not defined, send a 401 response.
   */
  if (!authenticated) {
    sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Access denied" })
    );
  }
});
