import ContentBox from "./ContentBox";
import useMediaQueries from "@/hooks/useMediaQueries";
import * as S from './Union.styled';

export default function Union() {
  const { isApp, isMobile } = useMediaQueries();

  return (
    <S.Container $isMobile={isMobile} id="union">
      <S.IntroduceText $isApp={isApp} $isMobile={isMobile}>
        <p>신입생이라서</p>
        <p>어떤 트랙을 선택할지 고민되나요?</p>
      </S.IntroduceText>
      <S.UnionTextContainer $isMobile={isMobile} $isApp={isApp}>
        <S.UnionText $isMobile={isMobile}>Union</S.UnionText>
        <S.NewBadge $isMobile={isMobile}>New</S.NewBadge>
      </S.UnionTextContainer>
      <ContentBox />
    </S.Container>
  );
};
