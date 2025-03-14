import axios from "../config/apiConfig";

interface VerifyResponse {
  status: number;
  message: string;
  data: string;
}

export const verifyStudent = async (studentNumber: string): Promise<VerifyResponse> => {
  try {
    const response = await axios.post<VerifyResponse>("/user/verify", { studentNumber });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const { status, message } = error.response.data;

      if (status === 404) {
        alert("❌ 사용자 인증 실패: 올바른 학번을 입력해주세요.");
      } else if (status === 409) {
        alert("⚠️ 이미 가입된 사용자입니다. 로그인 페이지로 이동합니다.");
        window.location.href = "/login"; 
      } else if (status === 500) {
        alert("🚨 서버 오류 발생: 다시 시도해주세요.");
      } else {
        alert(`${message}`);
      }
    }

    throw error;
  }
};
