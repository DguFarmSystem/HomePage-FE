import { useState, useRef, useEffect } from "react";
import * as S from "./Step2.styles"; 
import useMediaQueries from "@/hooks/useMediaQueries";
import LeftArrow from '../../../assets/LeftArrow.png';
import { useCreateApply, useLoadApply } from '@/hooks/useApply';
import Popup from '@/components/Popup/Popup';
import Logger from "@/utils/Logger";

interface ApplyLoginProps {
    setStep: (step: number) => void;
    isFirst: boolean;
    onSubmit: (studentNumber: string, password: string) => void;
}

export default function Step2({ setStep, isFirst, onSubmit }: ApplyLoginProps) {  

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { createApply } = useCreateApply();
  const { loadApply } = useLoadApply();

  const { isMobile } = useMediaQueries();
  const [studentId, setStudentId] = useState(""); 
  const [studentIdError, setStudentIdError] = useState(false);
  const [password, setPassword] = useState(["", "", "", "", "", ""]); 
  const [passwordError, setPasswordError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const handlePopState = () => {
        setStep(1); // Step1으로 이동
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
        window.removeEventListener("popstate", handlePopState);
    };
  }, [setStep]);

  // 학번 입력 핸들러
  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // 숫자만 입력
    setStudentId(value);
  
    if (value.length === 10) {
      setStudentIdError(false); // 10자리면 에러 제거
    } else {
      setStudentIdError(true); // 10자리가 아니면 에러 표시
    }
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newPass = [...password];
    newPass[index] = value;
    setPassword(newPass);

    if (value && index < 5) inputRefs.current[index + 1]?.focus(); 

    // 비밀번호가 6자리인지 확인
    if (newPass.includes("") || newPass.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !password[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    if (studentIdError || passwordError) return;

    try {
      const passwordString = password.join("");

      if (isFirst) {
        // 새 지원서 작성
        const applyId = await createApply({ studentNumber: studentId, password: passwordString });
        Logger.log("계정 생성 성공, applyId:", applyId);
        onSubmit(studentId, passwordString);
        setStep(3);
      } else {
        // 기존 지원서 불러오기
        const applyData = await loadApply({ studentNumber: studentId, password: passwordString });
        Logger.log("로그인 성공:", applyData);
        onSubmit(studentId, passwordString);
        setStep(3);
      }
    } catch (error) {
      Logger.error("에러 발생:", error);
      if (error instanceof Error) {
        setErrorMessage(error.message || "알 수 없는 오류가 발생했습니다.");
      } else {
        setErrorMessage("알 수 없는 오류가 발생했습니다.");
      }
      setPopupOpen(true);
    }
  };

  return (
    <S.Container>
      {/* 학번 입력 */}

      <S.Label>학번(10자리)</S.Label>
      <S.Input
        type="text"
        value={studentId}
        onChange={handleStudentIdChange}
        maxLength={10}
        placeholder="ex) 2025123456"
      />
      {studentIdError && (
        <S.ErrorMessage $isMobile={isMobile}>학번을 10자리 숫자로 입력해주세요.</S.ErrorMessage>
      )}

      {/* 비밀번호 입력 */}
      <S.Label>비밀번호(숫자 6자리)</S.Label>
      <S.PasswordContainer>
        {password.map((num, index) => (
          <S.PasswordInput
            key={index}
            type="tel"
            value={num}
            onChange={(e) => handlePasswordChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => { inputRefs.current[index] = el; }}
            maxLength={1}
            placeholder="_"
            // pattern="[0-9]*"
            inputMode="numeric"
          />
        ))}
      </S.PasswordContainer>
      {passwordError && (
        <S.ErrorMessage $isMobile={isMobile}>비밀번호 6자리를 모두 입력해주세요.</S.ErrorMessage>
      )}

      {/* 안내 문구 */}
      <S.InfoContainer>
        <S.InfoStar>* </S.InfoStar><S.InfoText>입력한 학번과 비밀번호를 통해 지원서를 언제든 불러올 수 있어요.</S.InfoText>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoStar>* </S.InfoStar><S.InfoText>학번과 비밀번호는 수정이 불가하며, 비밀번호를 잊어버렸을 경우 <br />새로 작성해야 해요. 신중하게 입력해주세요! </S.InfoText>
      </S.InfoContainer>

      {/* 버튼 (비활성화 조건 추가) */}
      <S.Button 
        green 
        onClick={handleSubmit} 
        disabled={studentIdError || passwordError || studentId.length !== 10 || password.includes("")}
      >
        확인
      </S.Button>

      <S.BackTextContainer $isMobile={isMobile} onClick={() => setStep(1)}>
        <S.Arrow src={LeftArrow} alt="RightArrow" />
        <S.BackText>첫 페이지로 돌아가기</S.BackText>
      </S.BackTextContainer>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"오류 발생"} 
        content={errorMessage} 
      />
    </S.Container>
  );
}