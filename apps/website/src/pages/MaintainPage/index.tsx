import * as S from "./MaintainPage.styled"
import useMediaQueries from "@/hooks/useMediaQueries";


export default function MaintainPage() {
    const { isMobile } = useMediaQueries();
    return (
        <S.Container>
            <S.Title $isMobile = {isMobile}>
                Coming Soon 
            </S.Title>
            <S.SubTitle $isMobile = {isMobile}>
              ✨ 3월 1일 오픈 예정 ✨
            </S.SubTitle>
            <S.Description $isMobile = {isMobile}>
              곧 팜시스템의 홈페이지를 만날 수 있어요! 조금만 기다려 주세요😉
            </S.Description>
        </S.Container>
    )
};

