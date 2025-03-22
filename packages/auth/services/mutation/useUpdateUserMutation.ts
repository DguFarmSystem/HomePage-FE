import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../../api/hooks/usePrivateApi";
import { useUserStore } from "../../stores/userStore";
import { User, UpdateUserRequest } from "../../models/user"; 
import { queryKeys } from "../queryKeys";

export const useUpdateUserMutation = () => {
  const { patch } = useApi();
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  return useMutation<User, Error, UpdateUserRequest>({
    mutationFn: async (body) => {
      const { data, status } = await patch<User>("/user/mypage", body);
      if (status !== 200) throw new Error("사용자 정보 수정 실패");
      return data;
    },
    onSuccess: (updatedUser) => {
      setUser(updatedUser); 
        queryClient.invalidateQueries({ queryKey: queryKeys.user.me }); // 쿼리 캐시 무효화는 쿼리 키로 가능하니깐 쿼리 키 정의 꼭 해주세요!
    },
    onError: () => {
      alert("사용자 정보 수정에 실패했습니다.");
    },
  });
};
