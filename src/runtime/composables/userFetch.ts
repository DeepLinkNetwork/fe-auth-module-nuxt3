import { useUserStore } from "../store/userStore";
import { apiFetch } from "./apiFetch";

export const userFetch = async (baseUrl: string) => {
  return await apiFetch(`${baseUrl}/api/getLoggedMemberInfo`, {
    method: "GET",
  }).then(
    (data: any) => {
      const userStore: any = useUserStore();
      /* Update Pinia state */
      userStore.setUser(data);
      console.log(data);
      return data;
    },
    (error) => {
      console.log("exception...");
      console.log(error);
      return error;
    }
  );
};
