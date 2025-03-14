import { useSocialLogin } from "../hooks/useSocialLogin";

const SocialLogin = () => {
  const { handleLogin } = useSocialLogin();

  return (
    <div>
      <button onClick={() => handleLogin("KAKAO")}>카카오 로그인</button>
      <button onClick={() => handleLogin("GOOGLE")}>구글 로그인</button>
    </div>
  );
};

export default SocialLogin;
