/**
 * useUserInfoQuery
 * 
 * 이 훅은 사용자 정보를 가져오는 React Query 훅입니다.
 * 사용자 정보를 API에서 가져와 Zustand의 `user` 상태에 저장합니다.
 * 
 * 주요 기능:
 * - `/user/mypage` API를 호출하여 사용자 정보를 가져옵니다.
 * - 상태 코드가 200이 아닌 경우 에러를 발생시킵니다.
 * - 가져온 사용자 정보를 Zustand의 `setUser`를 통해 전역 상태에 저장합니다.
 * 
 * 사용 예시:
 * 
 * 1. 사용자 정보 가져오기
 * 
 * const { data: userData, isLoading } = useUserInfoQuery();
 * 
 * if (isLoading) {
 *   return <p>로딩 중...</p>;
 * }
 * 
 * console.log(userData); // API에서 가져온 사용자 정보
 * 
 * 2. Zustand에서 사용자 정보 사용
 * 
 * const user = useUserStore((state) => state.user);
 * 
 * console.log(user); // Zustand에 저장된 사용자 정보
 * 
 * 3. 로그인 완료 시 사용 예시
 * 
 * const { data: userData, isLoading } = useUserInfoQuery();
 * 
 * Zustand에는 자동으로 저장되므로, 다른 컴포넌트에서도 아래처럼 바로 사용 가능:
 * 
 * const user = useUserStore((state) => state.user);
 * console.log(user); // Zustand에서 가져온 사용자 정보
 */

import { useQuery } from "@tanstack/react-query";
import { useApi } from "../../../api/hooks/usePrivateApi";
import { useUserStore } from "../../stores/userStore";
import { UserInfo } from "../../stores/userStore";

export const useUserInfoQuery = () => {
  const { get } = useApi();
  const { setUser } = useUserStore();

  return useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const { data, status } = await get<UserInfo>("/user/mypage");

      if (status !== 200) throw new Error("사용자 정보 조회 실패");

      setUser(data); 
      return data;
    },
    staleTime: 1000 * 60 * 5, 
    retry: 1,
  });
};

//invalidateQueries를 활용하여 캐시를 갱신하는 기능 필요(씨앗, 개인정보 등 업데이트시)