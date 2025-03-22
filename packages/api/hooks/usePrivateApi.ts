/**
 * usePrivateApi
 * 
 * 이 훅은 인증이 필요한 API 요청을 처리하기 위해 사용됩니다.
 * HTTP 메서드(GET, POST, PUT, PATCH, DELETE)를 추상화하여 간단히 호출할 수 있습니다.
 * 
 * 주요 기능:
 * - Authorization 헤더를 포함하여 요청을 보냅니다.
 * - 401 상태 코드 발생 시 토큰을 갱신하거나 로그인 페이지로 리다이렉트합니다.
 * - 404 상태 코드 발생 시 '/404' 페이지로 리다이렉트합니다.
 * - 요청 실패 시 에러 메시지를 반환합니다.
 * 
 * 사용 예제:
 * 
 * import { useApi } from '@/hooks/useApi';
 * 
 * const { get, post } = useApi();
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
import { ApiResponse, STATUS, Tokens } from '../models/api';
import { getClientSideTokens } from '../utils/getClientSideTokens';
import { useReissueAccessTokenMutation } from "../services/mutation/useReissueAccessTokenMutation"; 


export function useApi() {
  const navigate = useNavigate();
  const reissueToken = useReissueAccessTokenMutation(); 

  const request = useCallback(
    async function <T>(
      uri: string,
      options: { method: string; json?: unknown; searchParams?: Record<string, string> },
      tokens?: Tokens,
      hasRetried = false
    ): Promise<ApiResponse<T>> {
      if (!tokens && typeof window !== "undefined") {
        tokens = getClientSideTokens();
      }

      try {
        const response = await apiConfig.request<ApiResponse<T>>({
          url: uri,
          method: options.method,
          data: options.json,
          params: options.searchParams,
          headers: {
            Authorization: tokens ? `Bearer ${tokens.accessToken}` : "",
          },
        });

        return response.data;
      } catch (error: any) {
        if (error.response) {
          const { status } = error.response;

          if (status === STATUS.UNAUTHORIZED && tokens) {
            if (!hasRetried) {
              try {
                const newAccessToken = await reissueToken.mutateAsync();
                return await request<T>(
                  uri,
                  options,
                  { accessToken: newAccessToken, refreshToken: tokens.refreshToken },
                  true
                );
              } catch {
                // 엑세스 토큰 재발급 실패시 로직 추가 예정
              }
            }

            navigate("/?toast=401");
            throw new Error("로그인이 필요합니다.");
          }

          if (status === STATUS.NOT_FOUND) {
            navigate("/404");
          }
        }

        throw new Error(
          `API 요청 실패: ${error.message || "알 수 없는 오류가 발생했습니다."}`
        );
      }
    },
    [navigate, reissueToken]
  );


  return {
    get: <T>(uri: string, params?: Record<string, string>, tokens?: Tokens) =>
      request<T>(uri, { method: 'get', searchParams: params }, tokens),

    post: <T>(uri: string, body?: unknown, tokens?: Tokens) =>
      request<T>(uri, { method: 'post', json: body }, tokens),

    put: <T>(uri: string, body?: unknown, tokens?: Tokens) =>
      request<T>(uri, { method: 'put', json: body }, tokens),

    patch: <T>(uri: string, body?: unknown, tokens?: Tokens) =>
      request<T>(uri, { method: 'patch', json: body }, tokens),

    delete: <T>(uri: string, tokens?: Tokens) =>
      request<T>(uri, { method: 'delete' }, tokens),
  };
}
