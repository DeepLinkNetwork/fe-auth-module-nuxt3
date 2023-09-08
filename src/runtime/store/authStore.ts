import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "use-auth-store",

  state: () => {
    return {
      token: "",
      strategy: "local",
    };
  },

  persist: true,

  getters: {
    getToken: (state) => state.token,
  },

  actions: {
    setAuthToken(token: string) {
      this.token = token;
      this.strategy = "local";
    },
    unsetAuthToken() {
      this.token = "";
    },
  },
});
