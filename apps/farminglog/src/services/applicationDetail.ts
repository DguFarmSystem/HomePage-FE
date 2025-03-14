import apiConfig from "../config/apiConfig";
import { Application } from "../types/application";

export const fetchApplicationDetail = async (applyId: string): Promise<Application> => {
  try {
        const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("인증 토큰이 없습니다.");

    const response = await apiConfig.get<{ data: Application }>(`/admin/apply/${applyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    return response.data.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "지원서 상세 조회 실패");
  }
};
