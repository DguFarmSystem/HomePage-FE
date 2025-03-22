/// <reference types="vite/client" />

import axios from 'axios';

const getApiBaseUrl = () => {
  const hostname = window.location.hostname;
  let baseUrl;

  // 환경 변수가 없으면 경고 메시지 출력 + 하드코딩된 URL 사용
  if (!import.meta.env.VITE_BASE_URL || !import.meta.env.VITE_BASE_DEV_URL) {
    const warningMessage = "⚠️ 환경 변수가 누락되었습니다. 기본 URL을 사용합니다.";
    console.warn(warningMessage);
  }

  const baseDevUrl = import.meta.env?.VITE_BASE_DEV_URL || "https://api.dev.farmsystem.kr";
  const baseProdUrl = import.meta.env?.VITE_BASE_URL || "https://api.farmsystem.kr";

  if (import.meta.env.MODE === 'development' || hostname.startsWith('dev.')) {
    baseUrl = baseDevUrl ;
  } else {
    baseUrl = baseProdUrl;
  }
  
  // URL이 '/'로 끝나면 'api/', 아니면 '/api/'
  return baseUrl.endsWith('/') ? `${baseUrl}api/` : `${baseUrl}/api/`;
};

const API_BASE_URL = getApiBaseUrl();

const apiConfig = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 요청 타임아웃 5초
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiConfig;
