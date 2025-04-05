import * as S from '../styles/StepAuthComplete.Stlyed.ts';
import useMediaQueries from '@/hooks/useMediaQueries';
import AuthButton from './AuthButton';
import { useSocialLogin } from '@repo/auth/hooks/useSocialLogin';

import { isKakaoInApp, isAndroid, isIOS } from '@/utils/detect'; 

export default function StepAuthComplete() {
  const { isMobile } = useMediaQueries();
  const { handleLogin } = useSocialLogin();

  const redirectToExternalBrowser = (provider: 'KAKAO' | 'GOOGLE') => {
    const origin = window.location.origin;
    const loginUrl = `${origin}/?type=${provider}`; 

    if (isKakaoInApp()) {
      if (isAndroid()) {
        const intentUrl = `intent://${origin.replace(/^https?:\/\//, '')}/?type=${provider}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(
          loginUrl
        )};end;`;
        window.location.href = intentUrl;
      } else if (isIOS()) {
        window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(loginUrl)}`;
      }
      return true;
    }

    return false;
  };

  const handleClick = (provider: 'KAKAO' | 'GOOGLE') => {
    if (!redirectToExternalBrowser(provider)) {
      handleLogin(provider); // 외부 브라우저에서만 실행
    }
  };

  return (
    <S.Container $isMobile={isMobile}>
      <S.LogoIcon $isMobile={isMobile} />
      <S.Title $isMobile={isMobile}>인증이 완료되었습니다!</S.Title>
      <S.SubTitle $isMobile={isMobile}>이어서 진행해주세요.</S.SubTitle>
      <S.ButtonContainer $isMobile={isMobile}>
        <AuthButton provider="google" onClick={() => handleClick('GOOGLE')} />
        <AuthButton provider="kakao" onClick={() => handleClick('KAKAO')} />
      </S.ButtonContainer>
    </S.Container>
  );
}
