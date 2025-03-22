import apiConfig from "@/config/apiConfig";
import {
  BlogGETResponse,
  BlogPOSTRequest,
  BlogPOSTResponse,
  MyBlogPGetResponse,
} from "@/models/blog";

/**
 * 블로그 목록 조회
 * 엔드포인트: GET /blogs/page
 */
export const getBlogList = async (): Promise<BlogGETResponse> => {
    const response = await apiConfig.get("blogs/page");
    return response.data;
};

/**
 * 블로그 신청
 * 엔드포인트: POST /blogs
 */
export const postBlog = async (
  data: BlogPOSTRequest
): Promise<BlogPOSTResponse> => {
    const response = await apiConfig.post("blogs", data);
    return response.data;
};

/**
 * 승인된 내 블로그 목록 조회
 * 엔드포인트: POST /blogs/approved
 */
export const getApprovedBlogList = async (): Promise<BlogPOSTResponse> => {
    const response = await apiConfig.get("blogs/approved");
    return response.data;
};

/**
 * 승인된 내 블로그 목록 조회
 * 엔드포인트: POST /blogs/my
 */
export const getMyBlogList = async (): Promise<MyBlogPGetResponse> => {
  const response = await apiConfig.get("blogs/my");
  return response.data;
};
