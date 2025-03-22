import { Container, StyledButton } from './styles';
import { useSocialLogin } from '../../hooks/useSocialLogin';

const Auth = () => {
  const { handleLogin } = useSocialLogin();

  return (
    <Container>
      <h1>Auth Page</h1>
      <p>이 페이지는 인증 관련 작업을 위한 임시 페이지입니다.</p>
      <StyledButton onClick={() => handleLogin("GOOGLE")}>Google 로그인</StyledButton>
      <StyledButton onClick={() => handleLogin("KAKAO")}>Kakao 로그인</StyledButton>
    </Container>
  );
};

export default Auth;