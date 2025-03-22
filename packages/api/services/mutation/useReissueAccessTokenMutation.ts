import { useMutation,UseMutationResult } from "@tanstack/react-query";
import { useAuthStore } from "../../../auth/stores/authStore";
import { usePublicApi } from "../../hooks/usePublicApi";
import { getClientSideTokens } from "../../utils/getClientSideTokens";

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const useReissueAccessTokenMutation = (): UseMutationResult<
  string,
  Error,
  void
> => {
  const { post } = usePublicApi();
  const { setToken } = useAuthStore();

  return useMutation({
    mutationFn: async (): Promise<string> => {
      const { accessToken, refreshToken } = getClientSideTokens();

      if (!accessToken || !refreshToken) {
        throw new Error("토큰이 존재하지 않습니다.");
      }

      const { data, status } = await post<TokenResponse>("/auth/reissue", {
        accessToken,
        refreshToken,
      });

      if (status !== 200) {
          throw new Error("토큰 재발급 실패");
      }

      setToken(data.accessToken);
      return data.accessToken;
    },
  });
};
