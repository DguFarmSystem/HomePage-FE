import * as S from "../Application.styles";

interface QuestionsProps {
  questions: {
    selectedFields: string[];
    project: string;
    experience: string;
    secureIdea: string;
    portfolioLink: string;
  };
  setQuestions: React.Dispatch<
    React.SetStateAction<{
      selectedFields: string[];
      project: string;
      experience: string;
      secureIdea: string;
      portfolioLink: string;
    }>
  >;
  questionErrors: {
    project: boolean;
    experience: boolean;
    secureIdea: boolean;
  };
  setQuestionErrors: React.Dispatch<
    React.SetStateAction<{
      project: boolean;
      experience: boolean;
      secureIdea: boolean;
    }>
  >;
  isMobile: boolean;
}

export default function SecureWebTrack({
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
        1. 지원하고자 하는 파트를 선택해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(중복 선택 가능)</S.SubLabel>
      <S.CheckboxContainer $isMobile={isMobile}>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="웹 프론트엔드"
            checked={questions.selectedFields.includes("웹 프론트엔드")}
            onChange={handleQuestionChange}
          />
          웹 프론트엔드
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="웹 백엔드"
            checked={questions.selectedFields.includes("웹 백엔드")}
            onChange={handleQuestionChange}
          />
          웹 백엔드
        </S.CheckboxLabel>
      </S.CheckboxContainer>
      <S.Box />

      <S.Label $isMobile={isMobile}>
        2. 가장 인상깊었던 자신의 웹 프로젝트와 맡은 역할에 대해 구체적으로 작성해주세요. <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="project"
        placeholder="내용을 입력해주세요."
        value={questions.project}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, project: e.target.value.trim() === "" }))}
        $error={questionErrors.project}
        maxLength={500}
      />
          {questionErrors.project ? (
            <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
          ) : (
            <S.Box />
          )}

            <S.Label $isMobile={isMobile}>
              3. 협업할 때 가장 중요한 가치는 무엇인지 자신의 생각을 자유롭게 작성해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(300자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="experience"
              placeholder="내용을 입력해주세요."
              value={questions.experience}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, experience: e.target.value.trim() === "" }))}
              $error={questionErrors.experience}
              maxLength={300}
              />
      
            {questionErrors.experience ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}

          <S.Label $isMobile={isMobile}>
              4. 웹 프로젝트에 적용해보고 싶은 보안 주제와 그 이유를 작성해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(300자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="secureIdea"
              placeholder="내용을 입력해주세요."
              value={questions.secureIdea}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, secureIdea: e.target.value.trim() === "" }))}
              $error={questionErrors.secureIdea} 
              maxLength={300}
              />
            {questionErrors.secureIdea ? (
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