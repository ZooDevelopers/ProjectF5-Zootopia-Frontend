import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {

  state: () => ({
    users: [], 
    user: null,

  }),

  actions: {  
    async login(username, password) {
        const uri = import.meta.env.VITE_API_ENDPOINT_LOGIN
      const admin = this.users.find(
        (admin) => user.username === username && user.password === password
      );
      if (admin) {
        this.admin = { username };
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.user = admin;
      
    },
    checkAuth() {
      return !!this.user;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});