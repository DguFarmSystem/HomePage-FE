// useBlog.tsx
import { useState, useEffect } from "react";
import { BlogGETResponse, BlogPOSTRequest, BlogPOSTResponse } from "@/models/blog";
import { getBlogList, postBlog, getApprovedBlogList } from "@/services/blog";
import { handleApiError } from "@/utils/handleApiError";

/**
 * 블로그 목록 조회를 위한 커스텀 훅
 * 컴포넌트가 마운트될 때 getBlogList API를 호출하여 상태를 관리
 */
export const useBlogList = () => {
  const [data, setData] = useState<BlogGETResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getBlogList()
      .then((response) => {
        setData(response);
      })
      .catch((err) => setError(handleApiError(err)))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

/**
 * 블로그 신청을 위한 커스텀 훅
 * postNewBlog 함수를 호출하여 API 요청을 수행하며 상태를 관리
 */
export const usePostBlog = () => {
  const [data, setData] = useState<BlogPOSTResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postNewBlog = async (blogData: BlogPOSTRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postBlog(blogData);
      setData(response);
      return response;
    } 
    catch (err) {
      const errorObj = handleApiError(err);
      setError(errorObj);
    } 
    finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postNewBlog };
};

/**
 * 승인된 블로그 목록 조회를 위한 커스텀 훅
 * 컴포넌트가 마운트될 때 getApprovedBlogList API를 호출하여 상태 관리
 */
export const useApprovedBlogList = () => {
  const [data, setData] = useState<BlogPOSTResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getApprovedBlogList()
      .then((response) => {
        setData(response);
      })
      .catch((err) => { setError(handleApiError(err)); })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
