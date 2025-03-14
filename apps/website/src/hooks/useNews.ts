import { useState, useEffect } from 'react';
import { getNews, getNewsById } from '@/services/news';
import { NewsGETResponse, NewsIdGETResponse, newsData } from '@/models/news';
import { handleApiError } from '@/utils/handleApiError';

/** 소식 목록 불러오기 */
export const useNewsList = () => {
  const [data, setData] = useState<newsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNewsList = async () => {
      setLoading(true);
      try {
        const response: NewsGETResponse = await getNews();
        if (response.status === 200) {
          setData(response.data || []);
        } else {
          // 응답이 200이 아니면 메시지를 포함한 에러를 throw
          throw new Error(response.message);
        }
      } catch (err) {
        const errorObj = handleApiError(err);
        setError(errorObj);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsList();
  }, []);

  return { data, loading, error };
};

/** 소식 상세 불러오기 */
export const useNewsDetail = (newsId: number) => {
  const [data, setData] = useState<newsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      setLoading(true);
      try {
        const response: NewsIdGETResponse = await getNewsById(newsId);
        if (response.status === 200) {
          setData(response.data || null);
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        const errorObj = handleApiError(err);
        setError(errorObj);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [newsId]);

  return { data, loading, error };
};