export interface AuthState {
  accessToken: string | null;
  refreshToken?: string | null; 
  studentNumber?: string | null; // 회원가입 시 전달할 수 있는 값

  setToken: (accessToken: string) => void;
  setRefreshToken?: (refreshToken: string) => void; // 선택
  setStudentNumber?: (studentNumber: string) => void; // 선택
  clearAuth?: () => void; // 로그아웃 시 전체 초기화
}

// pakages/api 폴더 안에 모델과 겹치는 것들이 있어서 나중에 어떻게 처리할지 고민해야 함