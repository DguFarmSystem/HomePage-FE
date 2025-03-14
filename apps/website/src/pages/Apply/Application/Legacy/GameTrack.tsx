import * as S from "../Application.styles";

interface QuestionsProps {
  questions: {
    selectedFields1: string[];
    selectedFields2: string[];
    experience: string;
    cooperation: string;
    media: string;
    portfolioLink: string;
  };
  setQuestions: React.Dispatch<
    React.SetStateAction<{
        selectedFields1: string[];
        selectedFields2: string[];
        experience: string;
        cooperation: string;
        media: string;
        portfolioLink: string;
    }>
  >;
  questionErrors: {
    experience: boolean;
    cooperation: boolean;
    media: boolean;
  };
  setQuestionErrors: React.Dispatch<
    React.SetStateAction<{
      experience: boolean;
      cooperation: boolean;
      media: boolean;
    }>
  >;
  isMobile: boolean;
}

export default function GameTrack({
  questions,
  setQuestions,
  questionErrors,
  setQuestionErrors,
  isMobile,
}: QuestionsProps) {
  // 질문 목록 입력 처리
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setQuestions((prev) => {
      if (type === "checkbox") {
        if (name === "selectedFields1") {
          return {
            ...prev,
            selectedFields1: checked
              ? [...prev.selectedFields1, value]
              : prev.selectedFields1.filter((field) => field !== value),
          };
        } else if (name === "selectedFields2") {
          return {
            ...prev,
            selectedFields2: checked
              ? [...prev.selectedFields2, value]
              : prev.selectedFields2.filter((field) => field !== value),
          };
        }
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
      return prev;
    });

    setQuestionErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  return (
    <>
      <S.Label $isMobile={isMobile}>
        1. 게임/영상트랙에서 학습을 희망하는 분야를 모두 선택해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(중복 선택 가능)</S.SubLabel>
      <S.CheckboxContainer $isMobile={isMobile}>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields1"
            value="게임 개발"
            checked={questions.selectedFields1.includes("게임 개발")}
            onChange={handleQuestionChange}
          />
          게임 개발
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields1"
            value="컴퓨터비전"
            checked={questions.selectedFields1.includes("컴퓨터비전")}
            onChange={handleQuestionChange}
          />
          컴퓨터비전
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields1"
            value="2D/3D 디자인"
            checked={questions.selectedFields1.includes("2D/3D 디자인")}
            onChange={handleQuestionChange}
          />
          2D/3D 디자인 
        </S.CheckboxLabel>
      </S.CheckboxContainer>
      <S.Box />


      <S.Label $isMobile={isMobile}>
        2. 아래 프로그램들 중 사용 경험이 있는 것을 모두 체크해주세요. 
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(중복 선택 가능)</S.SubLabel>
      <S.CheckboxContainer $isMobile={isMobile}>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields2"
            value="Unity"
            checked={questions.selectedFields2.includes("Unity")}
            onChange={handleQuestionChange}
          />
          Unity
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields2"
            value="Unreal Engine"
            checked={questions.selectedFields2.includes("Unreal Engine")}
            onChange={handleQuestionChange}
          />
          Unreal Engine
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields2"
            value="3D MAX"
            checked={questions.selectedFields2.includes("3D MAX")}
            onChange={handleQuestionChange}
          />
          3D MAX
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields2"
            value="Blender"
            checked={questions.selectedFields2.includes("Blender")}
            onChange={handleQuestionChange}
          />
          Blender
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields2"
            value="기타"
            checked={questions.selectedFields2.includes("기타")}
            onChange={handleQuestionChange}
          />
          기타 
        </S.CheckboxLabel>
      </S.CheckboxContainer>
      <S.Box />

      <S.Label $isMobile={isMobile}>
        3. 위 문항에서 선택한 프로그램의 활동 경험을 서술해주세요. <S.Required>*</S.Required>
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
              4. 협업 경험을 자신이 맡은 역할과 배운 점을 중심으로 소개해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="cooperation"
              placeholder="내용을 입력해주세요."
              value={questions.cooperation}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, cooperation: e.target.value.trim() === "" }))}
              $error={questionErrors.cooperation}
              maxLength={500}
              />
      
            {questionErrors.cooperation ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}
          

          <S.Label $isMobile={isMobile}>
              5. 최근에 접했던 책, 기사, 동영상 등에서 기억에 남았던 내용과 그 이유를 적어주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="media"
              placeholder="내용을 입력해주세요."
              value={questions.media}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, media: e.target.value.trim() === "" }))}
              $error={questionErrors.media} 
              maxLength={500}
              />
            {questionErrors.media ? (
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