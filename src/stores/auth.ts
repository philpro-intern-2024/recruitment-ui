import { defineStore } from "pinia";
import { useAPI, useAPIJSON } from "../composables/useAPI";
import {
  type User,
  type RegisterData,
  type LoginData,
} from "./models/UserModel";

export interface State {
  user: User;
  accessToken: string;
  authReady: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): State => {
    return {
      user: {} as User,
      accessToken: "" as string,
      authReady: false as boolean,
    };
  },
  getters: {
    userDetail: (state: State) => state.user,
    isAuthenticated: (state: State) => (state.user?.id ? true : false),
  },
  actions: {
    async attempt() {
      try {
        await this.refresh();
        await this.getUser();
      } catch (error) {
        return;
      }
      return;
    },
    async login(payload: LoginData) {
      try {
        const result = await useAPI().post("/api/auth/login", payload);

        this.accessToken = result.data?.access_token;
        await this.getUser();

        return result;
      } catch (error: Error | any) {
        throw error.message;
      }
    },
    async register(payload: RegisterData) {
      try {
        const result = await useAPI().post("/api/auth/register", payload);
        return result;
      } catch (error: Error | any) {
        throw error.message;
      }
    },
    async getUser() {
      try {
        const { data } = await useAPIJSON().get("/api/auth/user");
        this.user = data;
        return data;
      } catch (error: Error | any) {
        throw error.message;
      }
    },
    async logout() {
      try {
        const { data } = await useAPIJSON().post(`/api/auth/logout`);
        this.accessToken = "";
        this.user = {} as User;
        return data;
      } catch (error: Error | any) {
        throw error.message;
      }
    },
    async refresh() {
      try {
        const { data } = await useAPI().post("/api/auth/refresh");
        this.accessToken = data?.access_token;
        return data;
      } catch (error: Error | any) {
        throw error.message;
      }
    },
  },
});
