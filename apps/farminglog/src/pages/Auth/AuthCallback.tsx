import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { requestLogin } from "../../services/auth";
import { useAuthStore } from "../../store/authStore";

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const code = searchParams.get("code");
    const scope = searchParams.get("scope"); // 구글에서 scope 값을 추가해줌
    let provider: "KAKAO" | "GOOGLE" | null = null;

    if (scope?.includes("https://www.googleapis.com/auth")) {
      provider = "GOOGLE";
    } else {
      provider = "KAKAO"; // 기본적으로 카카오로 가정
    }

    console.log("OAuth 인증 코드:", code);
    console.log("로그인 제공자 (provider):", provider);

    if (!code || !provider) {
      console.error("🚨 잘못된 접근입니다. (code 또는 provider가 없음)");
      return;
    }

    const fetchToken = async () => {
      try {
        const response = await requestLogin(code, provider);
        setToken(response.accessToken);
        navigate("/");
      } catch (error) {
        console.error("로그인 실패", error);
        alert("로그인 인증이 실패하였습니다. 다시 로그인해주세요.");
        navigate("/");
      }
    };

    fetchToken();
  }, [searchParams, navigate, setToken]);

  return <p>로그인 처리 중...</p>;
};

export default AuthCallback;
