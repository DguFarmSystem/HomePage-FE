import { GoogleOAuthProvider } from "@react-oauth/google";
import SocialLogin from "../../components/SocialLogin";

const LoginPageContent = () => {

  return (
    <div>
      <h1>소셜 로그인 테스트</h1>
      <SocialLogin />
    </div>
  );
};

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <LoginPageContent />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
