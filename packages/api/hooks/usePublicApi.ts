/**
 * usePublicApi
 * 
 * 이 훅은 인증이 필요하지 않은 공용 API 요청을 처리하기 위해 사용됩니다.
 * HTTP 메서드(GET, POST, PUT, PATCH, DELETE)를 추상화하여 간단히 호출할 수 있습니다.
 * 
 * 주요 기능:
 * - Authorization 헤더 없이 요청을 보냅니다.
 * - 404 상태 코드 발생 시 '/404' 페이지로 리다이렉트합니다.
 * - 요청 실패 시 에러 메시지를 반환합니다.
 * 
 * 사용 예제:
 * 
 * import { usePublicApi } from '@/hooks/usePublicApi';
 * 
 * const { get, post } = usePublicApi();
 * 
 * const fetchData = async () => {
 *   try {
 *     const data = await get('/example-endpoint');
 *     console.log(data);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * };
 * 
 * const sendData = async () => {
 *   try {
 *     const response = await post('/example-endpoint', { key: 'value' });
 *     console.log(response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * };
 */

import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import apiConfig from '../config/apiConfig';
import { ApiResponse, STATUS } from '../models/api';

export function usePublicApi() {
  const navigate = useNavigate();

  const request = useCallback(
    async function <T>(
      uri: string,
      options: { method: string; json?: unknown; searchParams?: Record<string, string> }
    ): Promise<ApiResponse<T>> {
      try {
        const response = await apiConfig.request<ApiResponse<T>>({
          url: uri,
          method: options.method,
          data: options.json,
          params: options.searchParams,
        });

        return response.data;
      } catch (error: any) {
        if (error.response) {
          const { status } = error.response;

          if (status === STATUS.NOT_FOUND) {
            navigate('/404');
          }
        }

        throw new Error(
          `API 요청 실패: ${error.message || '알 수 없는 오류'}`
        );
      }
    },
    [navigate]
  );

  return {
    get: <T>(uri: string, params?: Record<string, string>) =>
      request<T>(uri, { method: 'get', searchParams: params }),

    post: <T>(uri: string, body?: unknown) =>
      request<T>(uri, { method: 'post', json: body }),

    put: <T>(uri: string, body?: unknown) =>
      request<T>(uri, { method: 'put', json: body }),

    patch: <T>(uri: string, body?: unknown) =>
      request<T>(uri, { method: 'patch', json: body }),

    delete: <T>(uri: string) =>
      request<T>(uri, { method: 'delete' }),
  };
}
