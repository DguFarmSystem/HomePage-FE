export type SocialType = "KAKAO" | "GOOGLE";

export interface SocialLoginRequest {
  code: string;
  socialType: SocialType;
  studentNumber?: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

