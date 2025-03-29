import { useQuery } from '@tanstack/react-query';
import { usePrivateApi } from '@repo/api/hooks/usePrivateApi';

export interface RankUser {
  rank: number;
  userId: number;
  profileImageUrl: string;
  name: string;
  generation: number;
  track: string;
  totalSeed: number;
}

export interface UserRankingResponse {
  myRank: RankUser;
  userRankList: RankUser[];
}

export const useUserRankingQuery = () => {
  const { get } = usePrivateApi();

  return useQuery<UserRankingResponse>({
    queryKey: ['userRanking'],
    queryFn: async () => {
      const { data, status } = await get<UserRankingResponse>('/user/ranking');
      if (status !== 200) throw new Error('랭킹 조회 실패');
      return data;
    },
  });
};
