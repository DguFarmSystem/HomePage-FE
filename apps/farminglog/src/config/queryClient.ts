import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 기본적으로 모든 요청을 한 번만 재시도
      refetchOnWindowFocus: false, // 창을 다시 활성화할 때 재요청 방지
    },
  },
});
