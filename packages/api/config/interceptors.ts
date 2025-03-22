import apiConfig from "./apiConfig";
import Cookies from "js-cookie";
import { refreshAccessToken } from "../services/tokenService";

const setupInterceptors = () => {
  // 요청 인터셉터: 액세스 토큰 자동 추가
  apiConfig.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // 응답 인터셉터: 401 (토큰 만료) 발생 시 자동 갱신
  apiConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const expiredAccessToken = localStorage.getItem("accessToken");
          const refreshToken = Cookies.get("refreshToken");

          if (!refreshToken || !expiredAccessToken) {
            console.error("❌ 리프레시 토큰 없음 → 재로그인 필요");
            localStorage.removeItem("accessToken");
            Cookies.remove("refreshToken");
            window.location.href = "/login";
            return Promise.reject(error);
          }

          // 새로운 액세스 토큰 요청
          const newTokens = await refreshAccessToken(expiredAccessToken);

          // 새로운 토큰 저장
          localStorage.setItem("accessToken", newTokens.accessToken);
          Cookies.set("refreshToken", newTokens.refreshToken, { secure: true, sameSite: "Strict" });

          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
          return apiConfig(originalRequest); // 요청 재시도
        } catch (refreshError) {
          console.error("❌ 토큰 갱신 실패 → 재로그인 필요");
          localStorage.removeItem("accessToken");
          Cookies.remove("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
