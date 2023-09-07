import { defineStore } from "pinia";
import { useUserStore } from "../userStore/userStore";

const baseUrl = "API_URL";
const userStore: any = useUserStore();

export const useAuthStore = defineStore({
  id: "use-auth-store",

  state: () => ({
    token: null,
    strategy: "local",
  }),

  getters: {
    getToken: (state) => state.token,
  },

  actions: {
    async login(payload) {
      await $fetch(`${baseUrl}/login`, {
        method: "POST",
        body: payload,
      })
        .then((res: any) => {
          if (res.data.token) {
            /* Update Pinia state */
            this.token = res.data.token;
            /* Store user in local storage to keep them logged in between page refreshes */
            localStorage.setItem("authentication.token", this.token);
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    logout() {
      this.token = null;
      localStorage.removeItem("authentication.token");
    },
    async getUserInfo() {
      await $fetch(`${baseUrl}/getLoggedMemberInfo`, {
        method: "get",
      })
        .then((res: any) => {
          userStore.setUser(res.data);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
