import { useQuery } from '@tanstack/react-query';
import { usePrivateApi } from '@repo/api/hooks/usePrivateApi';
import { CheerItem } from '@/models/cheer';

export const useCheerListQuery = (page = 0, size = 10) => {
  const { get } = usePrivateApi();

  return useQuery<CheerItem[]>({
    queryKey: ['cheerList', page],
    queryFn: async () => {
      const { data, status } = await get<{
        page: object;
        cheerList: CheerItem[];
      }>('/cheer', {
        params: new URLSearchParams({
          page: String(page),
          size: String(size),
          sort: 'createdAt,desc',
        }).toString(),
      });

      if (status !== 200 || !Array.isArray(data.cheerList)) {
        console.warn('응원 목록 조회 실패 또는 cheerList가 배열 아님');
        return [];
      }

      return data.cheerList; 
    },
  });
};
