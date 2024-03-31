import {
  axiosInstance,
  axiosPrivateJSONInstance,
  axiosPrivateFormDataInstance,
} from "../utils/axios-instance";
import { useAuthStore } from "../stores/auth";
import { watchEffect } from "vue";
import type { AxiosInstance } from "axios";

export function useAPIJSON(): AxiosInstance {
  const authStore = useAuthStore();

  watchEffect(() => {
    axiosPrivateJSONInstance.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    axiosPrivateJSONInstance.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true;
          try {
            await authStore.refresh();
            prevRequest.headers["Authorization"] = authStore.accessToken;
            return axiosPrivateJSONInstance(prevRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      }
    );
  });

  return axiosPrivateJSONInstance;
}

export function useAPIFormData(): AxiosInstance {
  const authStore = useAuthStore();

  watchEffect(() => {
    axiosPrivateFormDataInstance.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    axiosPrivateFormDataInstance.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true;
          try {
            await authStore.refresh();
            prevRequest.headers["Authorization"] = authStore.accessToken;
            return axiosPrivateFormDataInstance(prevRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      }
    );
  });

  return axiosPrivateFormDataInstance;
}

export function useAPI() {
  return axiosInstance;
}
