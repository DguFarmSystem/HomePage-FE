// src/queries/queryKeys.ts

/**
 * queryKeys
 * 
 * 이 파일은 React Query에서 사용하는 쿼리 키를 관리하기 위한 객체입니다.
 * 쿼리 키는 React Query에서 데이터를 캐싱하고, 데이터를 식별하는 데 사용됩니다.
 * 
 * 주요 기능:
 * - 쿼리 키를 중앙에서 관리하여 중복을 방지하고, 유지보수를 쉽게 만듭니다.
 * - 쿼리 키를 함수로 정의하여 동적으로 생성할 수 있습니다.
 * 
 * 사용 예시:
 * 
 * 1. 정적 쿼리 키 사용
 * 
 * import { queryKeys } from "@/services/queryKeys";
 * 
 * const { data } = useQuery(queryKeys.user.me, fetchUserData);
 * 
 * 2. 동적 쿼리 키 사용
 * 
 * const { data } = useQuery(queryKeys.user.search("John"), searchUserData);
 */

export const queryKeys = {
  user: {
    // 사용자 정보를 가져오는 쿼리 키
    me: ["user", "me"] as const,

    // 사용자 검색 쿼리 키 (동적 키)
    search: (query: string) => ["user", "search", query] as const,
  },
  auth: {
    // 인증 관련 쿼리 키 (동적 키)
    verify: (studentNumber: string) => ["auth", "verify", studentNumber] as const,
  },
};
