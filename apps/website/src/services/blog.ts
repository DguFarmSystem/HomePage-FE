import apiConfig from "@repo/api/config/apiConfig";
// import apiConfig from "@/config/apiConfig";
import {
  BlogGETResponse,
  BlogPOSTRequest,
  BlogPOSTResponse,
} from "@/models/blog";

/**
 * 블로그 목록 조회
 * 엔드포인트: GET /blogs
 */
export const getBlogList = async (): Promise<BlogGETResponse> => {
    const response = await apiConfig.get("blogs");
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
