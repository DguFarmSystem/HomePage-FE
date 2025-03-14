import axios from "axios";

export const fetchApplyList = async (accessToken: string, track: string | null) => {
  const response = await axios.get("/api/admin/apply", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      track,
    },
  });

  return response.data;
};