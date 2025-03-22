import { User } from './user';

export interface AuthState {
  accessToken: string | null; 
  setToken: (token: string) => void; // 액세스 토큰 저장
}

export interface LoginResponse {
  accessToken: string;
  user: User; // 로그인 시 사용자 정보 함께 반환
}
