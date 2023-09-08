import { defineStore } from "pinia";

export interface UserState {
  currentUser: {
    role: string;
    addresses: [];
  };
  adminUsersList: null | [];
  publicUsersList: null | [];
}

export const useUserStore = defineStore<string, UserState>({
  id: "use-user-store",

  state: () => ({
    currentUser: {
      role: "",
      addresses: [],
    },
    adminUsersList: null,
    publicUsersList: null,
  }),

  persist: true,

  getters: {
    userBillingAddress: (state) => {
      return state.currentUser.addresses.length
        ? state.currentUser.addresses.find((a: any) => a.is_billing === true)
        : [];
    },
    userMailingAddress: (state) => {
      return state.currentUser.addresses.length
        ? state.currentUser.addresses.find((a: any) => a.is_primary === true)
        : [];
    },
    getUser: (state) => {
      return state.currentUser;
    },
    portfolioAdminAccess: (state) => {
      if (
        state.currentUser.role.includes("well-admin") ||
        state.currentUser.role.includes("portfolio-admin")
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  actions: {
    setUser(newValue: any) {
      this.currentUser = newValue;
    },
    setAdminUsersList(newValue: any) {
      this.adminUsersList = newValue;
    },
    setPublicUsersList(newValue: any) {
      this.publicUsersList = newValue;
    },
  },
});
