import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Cookies from 'js-cookie';
import { usePublicApi } from '@repo/api/hooks/usePublicApi';
import { useAuthStore } from '@repo/auth/stores/useAuthStore';
import LoadingSkeleton from '@/components/Skeleton/LoadingSkeleton';

export default function SocialRedirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { post } = usePublicApi();
  const { studentId, setToken } = useAuthStore();
  const hasCalled = useRef(false); //중복 호출 제발 그만 멈춰

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const code = params.get('code');
    const provider = (params.get('state') || params.get('provider'))?.toUpperCase();

    if (!code || (provider !== 'KAKAO' && provider !== 'GOOGLE')) {
      navigate('/?error=invalid_params');
      return;
    }

    const login = async () => {
      try {
        const { data, status } = await post<{ accessToken: string; refreshToken: string }>('/auth/login', {
          code,
          socialType: provider,
          studentNumber: studentId,
        });

        if (status !== 200) {
          navigate('/?error=login_failed');
          return;
        }

        setToken(data.accessToken);
        Cookies.set('refreshToken', data.refreshToken, {
          secure: true,
          sameSite: 'Strict',
        });

        navigate('/home');
      } catch (err: any) {
        const status = err?.response?.status;

        if (status === 404) {
          navigate('/?status=not-member');
        } else if (status === 409) {
          navigate('/?error=conflict');
        } else if (status === 500) {
          alert("로그인 중 문제가 발생했습니다.\n다시 로그인 해주세요.");
          navigate('/');
        } else {
          alert("로그인 중 문제가 발생했습니다.\n계속 안되면 운영진에게 문의해주세요!");
          navigate('/');
        }
      }
    };

    login();
  }, [params, navigate, post, setToken, studentId]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
    }}>
      <LoadingSkeleton />
    </div>
  );
}
