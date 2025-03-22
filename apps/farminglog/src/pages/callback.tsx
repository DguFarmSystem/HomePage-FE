import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useSocialLoginPostMutation } from "@repo/auth/services/mutation/useSocialLoginPostMutation";

const SocialCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
    const { mutate: login, status } = useSocialLoginPostMutation();
    // 원래 isLoading을 가져올 수 있을 텐데 안되서 status로 대체 -> 수정 필요
const isLoading = status === "pending";

  useEffect(() => {
    const code = params.get("code");
    const provider = params.get("provider")?.toUpperCase() as "KAKAO" | "GOOGLE";

    if (!code || (provider !== "KAKAO" && provider !== "GOOGLE")) {
      navigate("/");
      return;
    }

    login(
      { code, socialType: provider },
      {
        onSuccess: () => {
          navigate("/home"); 
        },
        onError: (error: any) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message;

      if (status === 404) {
        alert("회원 인증이 실패했습니다.\n입력한 학번을 다시 확인해주세요.");
        navigate("/"); // 인증 실패 → 회원가입? 자세한 확인 필요
      } else if (status === 409) {
        alert("이미 다른 소셜 계정으로 가입된 사용자입니다.\n다른 계정으로 로그인해주세요.");
        navigate("/");
      } else if (status === 500) {
        alert("소셜 로그인 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.");
        navigate("/");
      } else {
        alert(message || "알 수 없는 오류가 발생했습니다.");
        navigate("/");
      }
    },
      }
    );
  }, [params, login, navigate]);

  return <p>{isLoading ? "로그인 중입니다..." : "처리 중입니다..."}</p>;
};

export default SocialCallback;
