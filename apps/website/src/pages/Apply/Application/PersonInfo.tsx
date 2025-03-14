// import { ChangeEvent, FocusEvent } from "react";
import { ChangeEvent } from "react";
import * as S from "./Application.styles";
// import { validatePersonalInfo } from "@/validations/apply";

interface PersonalInfoProps {
  
    studentNumber: string;
    password: string;
    name: string;
    major: string;
    email: string;
    phoneNumber: string;
    onStudentNumberChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
    onNameChange: (value: string) => void;
    onMajorChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onPhoneNumberChange: (value: string) => void;
  
  personalErrors: {
    name: boolean;
    phone: boolean;
    email: boolean;
    affiliation: boolean;
    stdNumber: boolean;
  };
  setPersonalErrors: React.Dispatch<
    React.SetStateAction<{
      name: boolean;
      phone: boolean;
      email: boolean;
      affiliation: boolean;
      stdNumber: boolean;
    }>
  >;
  
  isMobile: boolean;
  disabled: boolean;
}



export default function PersonalInfo({
    studentNumber,
    name,
    major,
    email,
    phoneNumber,
    onStudentNumberChange,
    onNameChange,
    onMajorChange,
    onEmailChange,
    onPhoneNumberChange,
  personalErrors,
  setPersonalErrors,
  isMobile,
  disabled,
}: PersonalInfoProps) {
   

  return (
    <>
      <S.Title $isMobile={isMobile}>개인 정보</S.Title>
  
  
      {/* 이름 입력 */}
      <S.InfoContainer $isMobile={isMobile}>
        <S.Label $isMobile={isMobile}>
          이름<S.Required>*</S.Required>
        </S.Label>
        <S.Input
          $isMobile={isMobile}
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)}
          onBlur={(e) => setPersonalErrors((prev) => ({ ...prev, name: e.target.value.trim() === "" }))}
          $error={personalErrors.name}
          disabled={disabled}
        />
        {personalErrors.name ? (
          <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
          <S.Box />
        )}
      </S.InfoContainer>
  
      {/* 전화번호 입력 */}
      <S.InfoContainer $isMobile={isMobile}>
        <S.Label $isMobile={isMobile}>
          전화번호<S.Required>*</S.Required>
        </S.Label>
        <S.Input
          $isMobile={isMobile}
          type="text"
          name="phoneNumber"
          placeholder="ex) 01012345678"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(
            e.target.value.replace(/\D/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3").slice(0, 13)
          )}
          onBlur={(e) => setPersonalErrors((prev) => ({ ...prev, phone: e.target.value.trim() === "" }))}
          $error={personalErrors.phone}
          disabled={disabled}
        />
        {personalErrors.phone ? (
          <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
          <S.Box />
        )}
      </S.InfoContainer>
  
      {/* 이메일 입력 */}
      <S.InfoContainer $isMobile={isMobile}>
        <S.Label $isMobile={isMobile}>
          이메일<S.Required>*</S.Required>
        </S.Label>
        <S.Input
          $isMobile={isMobile}
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={(e) => setPersonalErrors((prev) => ({ ...prev, email: e.target.value.trim() === "" }))}
          $error={personalErrors.email}
          disabled={disabled}
        />
        {personalErrors.email ? (
          <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
          <S.Box />
        )}
      </S.InfoContainer>
  
      {/* 소속(학부) 입력 */}
      <S.InfoContainer $isMobile={isMobile}>
        <S.Label $isMobile={isMobile}>
          소속 (학부)<S.Required>*</S.Required>
        </S.Label>
        <S.Input
          $isMobile={isMobile}
          type="text"
          name="major"
          placeholder="ex) 첨단융합대학 컴퓨터/AI학부"
          value={major}
          onChange={(e) => onMajorChange(e.target.value)}
          onBlur={(e) => setPersonalErrors((prev) => ({ ...prev, affiliation: e.target.value.trim() === "" }))}
          $error={personalErrors.affiliation}
          disabled={disabled}
        />
        {personalErrors.affiliation ? (
          <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
          <S.Box />
        )}
      </S.InfoContainer>

      {/* 학번 입력 */}
      <S.InfoContainer $isMobile={isMobile}>
        <S.Label $isMobile={isMobile}>
          학번<S.Required>*</S.Required>
        </S.Label>
        <S.Input
          $isMobile={isMobile}
          type="text"
          name="studentNumber"
          placeholder="학번을 입력해주세요. ex) 2025123456"
          value={studentNumber}
          onChange={(e) => onStudentNumberChange(e.target.value)}
          onBlur={(e) => setPersonalErrors((prev) => ({ ...prev, stdNumber: e.target.value.trim() === "" }))}
          $error={personalErrors.stdNumber}
          disabled={true}
        />
        {personalErrors.stdNumber ? (
          <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
          <S.Box />
        )}
      </S.InfoContainer>
    </>
  );
}  