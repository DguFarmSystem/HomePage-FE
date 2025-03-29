import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Auth from './components/index';
import StepStart from './components/StepStart';
import StepInputStudentId from './components/StepInputStudentId';
import StepCheckName from './components/StepCheckName';
import StepAuthComplete from './components/StepAuthComplete';
import StepNotMember from './components/StepNotMember';
import { useAuthStore } from '@repo/auth/stores/useAuthStore';

export default function AuthPage() {
  const { step, setStep, setErrorMessage,setErrorTitle } = useAuthStore();
  const [params] = useSearchParams();
  const status = params.get('status');
  const type = params.get('type');

useEffect(() => {
  if (status === 'not-member') {
    setStep('not-member');

    if (type === '409') {
      setErrorTitle('이미 다른 소셜 계정으로 가입된 사용자입니다.');
      setErrorMessage('다른 계정으로 로그인해주세요.');
    } else {
      // 404의 기본 메시지
      setErrorTitle('가입되지 않은 사용자입니다.');
      setErrorMessage('소속 정보를 확인하고 다시 시도해주세요.');
    }
  }
}, [status, type, setStep, setErrorMessage, setErrorTitle]);

  return (
    <Auth>
      {step === 'start' && <StepStart />}
      {step === 'input' && <StepInputStudentId />}
      {step === 'check-name' && <StepCheckName />}
      {step === 'complete' && <StepAuthComplete />}
      {step === 'not-member' && <StepNotMember />}
    </Auth>
  );
}
