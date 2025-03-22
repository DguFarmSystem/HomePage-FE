import { useMutation } from "@tanstack/react-query";
import { usePublicApi } from "../../../api/hooks/usePublicApi";
import { useAuthStore } from "../../stores/authStore";
import Cookies from "js-cookie";

interface SocialLoginRequest {
  code: string;
  socialType: "KAKAO" | "GOOGLE";
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const useSocialLoginPostMutation = () => {
  const { post } = usePublicApi();
  const { studentNumber, setToken } = useAuthStore();

  const mutation = useMutation<TokenResponse, Error, SocialLoginRequest>({
    mutationFn: async ({ code, socialType }) => {
      const { data, status } = await post<TokenResponse>("/auth/login", {
        code,
        socialType,
        studentNumber,
      });

      if (status !== 200) throw new Error("로그인 실패");

      const { accessToken, refreshToken } = data;

          setToken(accessToken);
          
      //refreshToken: js-cookie 저장 (HttpOnly 아니여서 추후에 보안 조치 필요)
      Cookies.set("refreshToken", refreshToken, {
        secure: true,
        sameSite: "Strict",
      });

      return { accessToken, refreshToken };
    },
  });

  return mutation;
};
