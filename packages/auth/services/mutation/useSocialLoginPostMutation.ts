import { useMutation } from "@tanstack/react-query";
import { usePublicApi } from "../../../api/hooks/usePublicApi";
import { useAuthStore } from "../../stores/useAuthStore";
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
  const studentId = useAuthStore((state) => state.studentId);
  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation<TokenResponse, Error, SocialLoginRequest>({
    mutationFn: async ({ code, socialType }) => {
      const { data, status } = await post<TokenResponse>("/auth/login", {
        code,
        socialType,
        studentNumber: studentId,
      });

      if (status !== 200) throw new Error("로그인 실패");

      console.log("소셜 로그인 성공", data);

      const { accessToken, refreshToken } = data;

      setToken(accessToken);

      Cookies.set("refreshToken", refreshToken, {
        secure: true,
        sameSite: "Strict",
      });

      return data; // ✅ 이게 중요!
    },
  });

  return mutation;
};
