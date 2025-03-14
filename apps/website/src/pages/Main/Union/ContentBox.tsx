import * as S from "./ContentBox.styled";
import useMediaQueries from "@/hooks/useMediaQueries";

export default function ContentBox() {
  const { isApp, isTiny, isMobile, isTablet } = useMediaQueries();

  return (
    <S.Container $isMobile={isMobile}>
      <S.GradientContainer $isMobile={isMobile} $isTablet={isTablet}>
        <S.GradientLeft $isMobile={isMobile} $isTablet={isTablet}/>
        <S.GradientRight $isMobile={isMobile} $isTablet={isTablet}/>
      </S.GradientContainer>
      <S.ContentBoxBorder $isMobile={isMobile}>
        <S.Content $isMobile={isMobile}>
          <S.ContentInfoTextBox $isMobile={isMobile}>
          {isMobile ? (
              <p><S.HighlightOrange $isMobile={isMobile}>Union</S.HighlightOrange>은 <S.Bold>SW/AI 기초 역량</S.Bold>을 다지기 위한 과정으로, <S.Bold>트랙 구분 없이</S.Bold> 다섯 가지 트랙의 다양한 주제에 대한 <S.Bold>SW 기본 역량</S.Bold>을 다집니다. 각 트랙의 멘토가 제공하는 프로젝트와 스터디에 멘티로서 참여하게 됩니다.</p>
            ) : (
              <>
                <p>
                  <S.HighlightOrange $isMobile={isMobile}>Union</S.HighlightOrange>은
                </p>
                <p><S.Bold>SW/AI 기초 역량</S.Bold>을 다지기 위한 과정으로,</p>
                <p><S.Bold>트랙 구분 없이</S.Bold> 다섯 가지 트랙의 다양한 주제에 대한</p>
                <p><S.Bold>SW 기본 역량</S.Bold>을 다집니다.</p>
                <p>각 트랙의 멘토가 제공하는 프로젝트와 스터디에</p>
                <p>멘티로서 참여하게 됩니다.</p>
              </>
            )}
            
          </S.ContentInfoTextBox>
          <S.ActivityTitle $isMobile={isMobile}>
            한 학기 활동
          </S.ActivityTitle>
          <S.ActivityList $isMobile={isMobile} $isTiny={isTiny}>
            {isApp ? (
              <S.ListBox $isApp={isApp}>
                <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                  월별 기술 블로그
                </S.Li>
                <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                  스터디 정기 모임
                </S.Li>
                <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                  Farm System 아이디어톤 참가
                </S.Li>
                <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                  트랙 멘토-멘티 프로그램
                </S.Li>
              </S.ListBox>
            ) : (
              <>
                <S.ListBox $isApp={isApp}>
                  <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                    월별 기술 블로그
                  </S.Li>
                  <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                    스터디 정기 모임
                  </S.Li> 
                </S.ListBox>
                <S.ListBox $isApp={isApp}>
                  <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                    Farm System 아이디어톤 참가
                  </S.Li>
                  <S.Li $isApp={isApp} $isMobile={isMobile} $isTiny={isTiny}>
                    트랙 멘토-멘티 프로그램
                  </S.Li> 
                </S.ListBox>  
              </>
            )}
                 
          </S.ActivityList>
        </S.Content>
      </S.ContentBoxBorder>
    </S.Container>
  );
}
