import { useAuthStore } from "../store/authStore";
import { useFetch, useCookie } from "#imports";
import { apiFetch } from "./apiFetch";

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
        //set Auth Cookie
        const authCookie = useCookie("authentication.token");
        authCookie.value = data.token;
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
      //set Auth Cookie
      const authCookie = useCookie("authentication.token");
      authCookie.value = "";
      return "success";
    },
    (error) => {
      console.log("exception...");
      console.log(error);
      return "failed";
    }
  );
};
