import { useAuthStore } from "../store/authStore";

export const apiFetch = async (url: string, opts?: any | undefined | null) => {
  const jwt = useAuthStore();
  return await $fetch(url, {
    ...(opts ? opts : {}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.getToken}`,
    },
  }).then(
    (res: any) => {
      return res;
    },
    (error) => {
      console.log("exception...");
      console.log(error);
      return error;
    }
  );
};
