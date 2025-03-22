import apiConfig from "@repo/api/config/apiConfig";
// import apiConfig from "@/config/apiConfig";
import {
  NewsGETResponse,
  NewsIdGETResponse,
} from "@/models/news";

export const getNews = async (): Promise<NewsGETResponse> => {
  const response = await apiConfig.get("news");
  return response.data;
}

export const getNewsById = async (newsId: number): Promise<NewsIdGETResponse> => {
  const response = await apiConfig.get(`news/${newsId}`);
  return response.data;
}