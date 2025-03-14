import apiConfig from "../config/apiConfig";
import { Application } from "../types/application";

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export const fetchApplications = async (track?: string): Promise<Application[]> => {
  try {
    const response = await apiConfig.get<ApiResponse<Application[]>>("/admin/apply", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      },
      params: track ? { track } : {},
    });

    return response.data.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "지원서 목록 조회 실패";

    if (errorMessage === "리소스 접근 권한이 없습니다.") {
      alert("❌ 관리자 권한이 필요합니다. 접근할 수 없습니다.");
    } else if (errorMessage === "액세스 토큰의 값이 올바르지 않습니다.") {
      alert("⚠️ 다시 로그인해주세요.");
    }

    throw new Error(errorMessage);
  }
};
