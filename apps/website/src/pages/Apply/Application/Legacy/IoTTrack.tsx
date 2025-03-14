import * as S from "../Application.styles";

interface QuestionsProps {
  questions: {
    selectedFields: string[];
    reason: string;
    projectIdea: string;
    goals: string;
    portfolioLink: string;
  };
  setQuestions: React.Dispatch<
    React.SetStateAction<{
      selectedFields: string[];
      reason: string;
      projectIdea: string;
      goals: string;
      portfolioLink: string;
    }>
  >;
  questionErrors: {
    reason: boolean;
    projectIdea: boolean;
    goals: boolean;
  };
  setQuestionErrors: React.Dispatch<
    React.SetStateAction<{
      reason: boolean;
      projectIdea: boolean;
      goals: boolean;
    }>
  >;
  isMobile: boolean;
}

export default function IoTTrack({
  questions,
  setQuestions,
  questionErrors,
  setQuestionErrors,
  isMobile,
}: QuestionsProps) {
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      setQuestions((prev) => ({
        ...prev,
        selectedFields: checked
          ? [...prev.selectedFields, value]
          : prev.selectedFields.filter((field) => field !== value),
      }));
    } else {
      setQuestions((prev) => ({ ...prev, [name]: value }));
    }

    setQuestionErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  return (
    <>
      <S.Label $isMobile={isMobile}>
        1. 사물인터넷/로봇 트랙에서 학습을 희망하는 분야를 모두 선택해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(중복 선택 가능)</S.SubLabel>
      <S.CheckboxContainer $isMobile={isMobile}>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="라즈베리파이/임베디드시스템"
            checked={questions.selectedFields.includes("라즈베리파이/임베디드시스템")}
            onChange={handleQuestionChange}
          />
          라즈베리파이/임베디드시스템
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="ROS2"
            checked={questions.selectedFields.includes("ROS2")}
            onChange={handleQuestionChange}
          />
          ROS2
        </S.CheckboxLabel>
      </S.CheckboxContainer>
      <S.Box />

      {/* 선택한 이유 */}
      <S.Label $isMobile={isMobile}>
        2. 선택한 이유를 구체적으로 작성해주세요. <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="reason"
        placeholder="내용을 입력해주세요."
        value={questions.reason}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, reason: e.target.value.trim() === "" }))}
        $error={questionErrors.reason}
        maxLength={500}
      />
      {questionErrors.reason ? (
            <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
        ) : (
            <S.Box />
        )}
            <S.Label $isMobile={isMobile}>
              3. 사물인터넷/로봇 트랙의 기업 연계 및 자율 프로젝트에서 진행하고 싶은 프로젝트 주제와 그 이유를 작성해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="projectIdea"
              placeholder="내용을 입력해주세요."
              value={questions.projectIdea}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, projectIdea: e.target.value.trim() === "" }))}
              $error={questionErrors.projectIdea}
              maxLength={500}
              />
      
            {questionErrors.projectIdea ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}
          <S.Label $isMobile={isMobile}>
              4. Farm System 4기 사물인터넷/로봇 트랙의 활동을 통해서 이루고자 하는 목표 및 기대하는 바에 대해서 작성해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="goals"
              placeholder="내용을 입력해주세요."
              value={questions.goals}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, goals: e.target.value.trim() === "" }))}
              $error={questionErrors.goals} 
              maxLength={500}
              />
            {questionErrors.goals ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}
      
            <S.Label $isMobile={isMobile}>5. 나를 표현할 수 있는 주소가 있다면 첨부해주세요.</S.Label>
            <S.SubLabel $isMobile={isMobile}>Github, LinkedIn, 개인 블로그, 포트폴리오 등</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="portfolioLink"
              placeholder="내용을 입력해주세요."
              value={questions.portfolioLink}
              onChange={handleQuestionChange}
            />
            <S.Box />
    </>
  );
}