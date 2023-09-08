import { useAuthStore } from "../store/authStore";
import { useNuxtApp, useFetch, useCookie } from "#imports";
import { apiFetch } from "./apiFetch";

const setCookie = (value: string | null) => {
  //Auth Cookie
  const authCookie = useCookie("authentication.token", {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  authCookie.value = value; // Nuxt will set the maxAge: -1 if the cookie is null or undefined

  //CBA Auth Cookie
  const { $cbaPrefix } = useNuxtApp(); // get env variable
  const cbaAuthCookie = useCookie($cbaPrefix() + ".cba.token", {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  cbaAuthCookie.value = value; // Nuxt will set the maxAge: -1 if the cookie is null or undefined
};

export const authFetch = async (baseUrl: string, payload: any) => {
  return await useFetch(`${baseUrl}/api/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  }).then(
    (res: any) => {
      const data = res.data.value;
      const error = res.error.value;
      if (error) {
        // dealing error
        console.log("API Error Response : " + error);
        return "failed";
      } else {
        const authStore: any = useAuthStore();
        /* Update Pinia state */
        authStore.setAuthToken(data.token);
        //Set Auth Cookies
        setCookie(data.token);
        return data.token;
      }
    },
    (error) => {
      console.log("exception...");
      console.log(error);
      return error;
    }
  );
};

export const authLogout = async (baseUrl: string) => {
  const authStore: any = useAuthStore();
  return await apiFetch(`${baseUrl}/api/logout`, {
    method: "POST",
  }).then(
    (res: any) => {
      console.log(res);
      // /* Update Pinia state */
      authStore.unsetAuthToken();
      // unset Auth Cookies
      setCookie(null); // Nuxt will set the maxAge: -1 if the cookie is null or undefined

      return "success";
    },
    (error) => {
      console.log("exception...");
      console.log(error);
      return "failed";
    }
  );
};
