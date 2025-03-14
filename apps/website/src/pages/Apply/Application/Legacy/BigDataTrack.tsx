import * as S from "../Application.styles";

interface QuestionsProps {
  questions: {
    skills: string;
    experience: string;
    project: string;
    portfolioLink: string;
  };
  setQuestions: React.Dispatch<
    React.SetStateAction<{
      skills: string;
      experience: string;
      project: string;
      portfolioLink: string;
    }>
  >;
  questionErrors: {
    skills: boolean;
    experience: boolean;
  };
  setQuestionErrors: React.Dispatch<
    React.SetStateAction<{
      skills: boolean;
      experience: boolean;
    }>
  >;
  isMobile: boolean;
}

export default function BigDataTrack({
  questions,
  setQuestions,
  questionErrors,
  setQuestionErrors,
  isMobile,
}: QuestionsProps) {
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    // const checked = (e.target as HTMLInputElement).checked;

    
      setQuestions((prev) => ({ ...prev, [name]: value }));
    

    setQuestionErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  return (
    <>
      <S.Label $isMobile={isMobile}>
        1. R, Python, SQL 등의 데이터 분석 도구 혹은 머신러닝, 데이터 시각화, ELK 스택과 같은 기술을 학습 또는 활용해본 경험을 작성해주세요.<S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(300자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="skills"
        placeholder="내용을 입력해주세요."
        value={questions.skills}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, skills: e.target.value.trim() === "" }))}
        $error={questionErrors.skills}
        maxLength={300}
      />
      {questionErrors.skills ? (
        <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
      ) : (
        <S.Box />
      )}

            <S.Label $isMobile={isMobile}>
              2. 데이터 분석 관련 프로젝트 또는 공모전 등의 경험이 있다면 작성해주세요.
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="experience"
              placeholder="내용을 입력해주세요."
              value={questions.experience}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, experience: e.target.value.trim() === "" }))}
              $error={questionErrors.experience}
              maxLength={500}
              />
      
            {questionErrors.experience ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}


          <S.Label $isMobile={isMobile}>
              3. 빅데이터 트랙에서 가장 하고싶은 활동 (Peer-멘토링, 공모전, 기업 연계 프로젝트, 또는 이외의 활동 등)과 그 이유에 대해 작성해주세요. 
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(300자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="project"
              placeholder="내용을 입력해주세요."
              value={questions.project}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, project: e.target.value.trim() === "" }))}
              maxLength={300}
              />
              <S.Box />
            
      
            <S.Label $isMobile={isMobile}>4. 나를 표현할 수 있는 주소가 있다면 첨부해주세요.</S.Label>
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