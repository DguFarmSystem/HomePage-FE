import { usePublicApi } from '@repo/api/hooks/usePublicApi';

interface SocialLoginRequest {
  code: string;
  socialType: 'KAKAO' | 'GOOGLE';
  studentNumber: string;
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const useSocialLoginApi = () => {
  const { post } = usePublicApi();

  const loginWithSocial = async ({ code, socialType, studentNumber }: SocialLoginRequest): Promise<TokenResponse> => {
    const { data, status } = await post<TokenResponse>('/auth/login', {
      code,
      socialType,
      studentNumber,
    });

    if (status !== 200) {
      throw new Error('로그인 실패');
    }

    return data;
  };

  return { loginWithSocial };
};
