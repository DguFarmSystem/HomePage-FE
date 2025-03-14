import { useEffect, useState } from "react";

interface Kakao {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Auth: {
    authorize: (options: { redirectUri: string }) => void;
  };
}

declare global {
  interface Window {
    Kakao: Kakao;
  }
}

// 환경별 리다이렉트 URI 가져오기
const getRedirectUri = (provider: "KAKAO" | "GOOGLE") => {
  return provider === "KAKAO"
    ? import.meta.env.VITE_KAKAO_REDIRECT_URI
    : import.meta.env.VITE_GOOGLE_REDIRECT_URI;
};

// 환경 감지 (웹 vs 카카오 앱)
const isKakaoApp = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("kakaotalk");
};

// 카카오 SDK 초기화
const initializeKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    const appKey = import.meta.env.VITE_KAKAO_JS_KEY;
    if (appKey) {
      window.Kakao.init(appKey);
    } else {
      console.error("Kakao SDK 초기화 실패: 앱 키가 설정되지 않았습니다.");
    }
  }
};

export const useSocialLogin = () => {
  const [, setIsKakaoInitialized] = useState(false);

  useEffect(() => {
    try {
      initializeKakao();
      setIsKakaoInitialized(true);
    } catch (error) {
      console.error("Kakao SDK initialization failed:", error);
    }
  }, []);

  const handleLogin = (provider: "KAKAO" | "GOOGLE") => {
    const redirectUri = getRedirectUri(provider);
    const clientId =
      provider === "KAKAO"
        ? import.meta.env.VITE_KAKAO_CLIENT_ID
        : import.meta.env.VITE_GOOGLE_CLIENT_ID;

    let authUrl = "";

    if (provider === "KAKAO") {
      if (isKakaoApp()) {
        // 앱 환경에서는 SDK 활용
        if (!window.Kakao) return;
        window.Kakao.Auth.authorize({ redirectUri });
      } else {
        // 웹 환경에서는 REST API 방식 사용
        authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      }
    } else if (provider === "GOOGLE") {
      authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile email openid`;
    }

    console.log(`${provider} OAuth 요청 URL:`, authUrl);
    if (authUrl) {
      window.location.href = authUrl;
    }
  };

  return { handleLogin };
};
