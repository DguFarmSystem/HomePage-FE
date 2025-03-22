import { useEffect } from "react";

const isKakaoApp = () => navigator.userAgent.toLowerCase().includes("kakaotalk");

const initializeKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
  }
};

export const useSocialLogin = () => {
  useEffect(() => {
    initializeKakao();
  }, []);

  const handleLogin = (provider: "KAKAO" | "GOOGLE") => {
    const redirectUri =
      provider === "KAKAO"
        ? import.meta.env.VITE_KAKAO_REDIRECT_URI
        : import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    const clientId =
      provider === "KAKAO"
        ? import.meta.env.VITE_KAKAO_CLIENT_ID
        : import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (provider === "KAKAO" && isKakaoApp()) {
      window.Kakao?.Auth.authorize({ redirectUri });
      return;
    }

    const authUrl =
      provider === "KAKAO"
        ? `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
        : `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile email openid`;

    window.location.href = authUrl;
  };

  return { handleLogin };
};
