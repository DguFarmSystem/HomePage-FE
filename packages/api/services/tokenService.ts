import apiConfig from "../config/apiConfig";

export const refreshAccessToken = async (expiredAccessToken: string) => {
  try {
    const response = await apiConfig.post("/auth/reissue", {
      accessToken: expiredAccessToken,
    });

    return response.data.data; 
  } catch (error) {
    console.error("❌ Reissue API 요청 실패", error);
    throw error;
  }
};
