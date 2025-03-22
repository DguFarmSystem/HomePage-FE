/**
 * 1. [쿼리] 인증 필요 (토큰 O)
 * 
 * 이 파일은 React Query를 사용하여 인증이 필요한 사용자 정보를 가져오는 훅을 정의합니다.
 * 
 * 주요 기능:
 * - `/user/mypage` API를 호출하여 사용자 정보를 가져옵니다.
 * - 인증이 필요한 API 요청을 처리하기 위해 `useApi` 훅을 사용합니다.
 * - React Query의 `useQuery`를 사용하여 데이터를 캐싱하고 상태를 관리합니다.
 * 
 * 사용 예시:
 * 
 * import { useUserInfoQuery } from "@/services/query/useUserInfoQuery";
 * 
 * const { data: userData, isLoading } = useUserInfoQuery();
 * 
 * if (isLoading) {
 *   return <p>로딩 중...</p>;
 * }
 * 
 * console.log(userData); // 사용자 정보
 */

/**
 * 우리 코드 예시
 * 
 * import { useQuery } from "@tanstack/react-query";
 * import { useApi } from "api/hooks/usePrivateApi"; // 인증 포함 API -> 최상단 루트 패키지 폴더에 있음
 * import { queryKeys } from "queries/queryKeys";
 * 
 * export const useUserInfoQuery = () => {
 *   const { get } = useApi();
 * 
 *   return useQuery({
 *     queryKey: queryKeys.user.me,
 *     queryFn: async () => {
 *       const { data, status } = await get("/user/mypage");
 *       if (status !== 200) throw new Error("사용자 정보 조회 실패");
 *       return data;
 *     },
 *     staleTime: 1000 * 60 * 5, // 5분 캐싱
 *   });
 * };
 */