/**
 * 2. [쿼리] 인증 필요 없음 (토큰 X)
 * 
 * 이 파일은 React Query를 사용하여 인증이 필요 없는 회원 인증 API를 호출하는 훅을 정의합니다.
 * 
 * 주요 기능:
 * - `/auth/verify` API를 호출하여 회원 인증을 수행합니다.
 * - 인증이 필요 없는 API 요청을 처리하기 위해 `usePublicApi` 훅을 사용합니다.
 * - React Query의 `useQuery`를 사용하여 데이터를 캐싱하고 상태를 관리합니다.
 * 
 * 사용 예시:
 * 
 * import { useVerifyQuery } from "@/services/query/useVerifyQuery";
 * 
 * const { data: verifyData, isLoading } = useVerifyQuery("123456");
 * 
 * if (isLoading) {
 *   return <p>로딩 중...</p>;
 * }
 * 
 * console.log(verifyData); // 회원 인증 결과
 */

/**
 * import { useQuery } from "@tanstack/react-query";
 * import { usePublicApi } from "@/api/hooks/usePublicApi"; // 인증 토큰 필요 없을 때는 퍼블릭 api 사용
 * import { queryKeys } from "@/queries/queryKeys";
 */

/**
 * export const useVerifyQuery = (studentNumber: string) => {
 *   const { get } = usePublicApi();
 * 
 *   return useQuery({
 *     queryKey: queryKeys.auth.verify(studentNumber),
 *     queryFn: async () => {
 *       const { data, status } = await get("/auth/verify", { studentNumber });
 *       if (status !== 200) throw new Error("회원 인증 실패");
 *       return data;
 *     },
 *     enabled: !!studentNumber, // studentNumber 있을 때만 실행
 *   });
 * };
 */