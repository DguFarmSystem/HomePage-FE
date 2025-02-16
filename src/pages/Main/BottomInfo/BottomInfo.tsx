import { useState } from 'react';
import * as S from './BottomInfo.styles';
import GitHubIcon from '@/assets/githubLogo2.png';
import InstagramIcon from '@/assets/InstagramLogo2.png';
import LinktreeIcon from '@/assets/LinktreeLogo.png';
import DGUIcon from "@/assets/DGULogo.png";
import Popup from '@/components/Popup/Popup';
import useMediaQueries from '@/hooks/useMediaQueries';

const BottomInfo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isMobile, isTablet } = useMediaQueries();

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdaELf6PNpRSD18nPPcgH_934Wsm9Gju54P62vWlczusmRg3w/viewform";

  return (
    <S.BottomInfoContainer id="eligibility" $isMobile={isMobile} $isTablet={isTablet}>
      <S.Title $isMobile={isMobile} $isTablet={isTablet}>
        <S.Highlight>Farm System</S.Highlight>을 더 알아가고 싶나요?
      </S.Title>
      
      <S.IconsContainer $isMobile={isMobile} $isTablet={isTablet}>
         <S.IconLink href="https://github.com/DguFarmSystem" target="_blank" rel="noopener noreferrer">
          <S.Icon $isMobile={isMobile} src={GitHubIcon} alt="GitHub" />
        </S.IconLink>
        <S.IconLink href="https://www.instagram.com/dgu_farm_system/" target="_blank" rel="noopener noreferrer">
          <S.Icon $isMobile={isMobile} src={InstagramIcon} alt="Instagram" />
        </S.IconLink>
        <S.IconLink href="https://linktr.ee/dgu_farm_system" target="_blank" rel="noopener noreferrer">
          <S.Icon $isMobile={isMobile} src={LinktreeIcon} alt="Linktree" />
        </S.IconLink>
        <S.IconLink href="https://www.dongguk.edu/main" target="_blank" rel="noopener noreferrer">
          <S.Icon $isMobile={isMobile} src={DGUIcon} alt="Community" />
        </S.IconLink>
      </S.IconsContainer>
     
      <S.RequirementsBox $isMobile={isMobile} $isTablet={isTablet}>
        <S.RequirementsTitle $isMobile={isMobile} $isTablet={isTablet}>지원 요건</S.RequirementsTitle>
        <S.RequirementItem>
          <S.RequirementTitle $isMobile={isMobile}>- 누구나 환영해요!</S.RequirementTitle>
          <S.RequirementText $isMobile={isMobile}>Farm System에 관심 있는 동국대학교 학생이라면 누구든지 참여할 수 있어요.🌱</S.RequirementText>
        </S.RequirementItem>
        <S.RequirementItem>
          <S.RequirementTitle $isMobile={isMobile}>- 월요일 저녁, 같이 성장해요.</S.RequirementTitle>
          <S.RequirementText $isMobile={isMobile}>매주 월요일 19시⏰부터 약 2시간 동안 정기 모임이 열려요. 원활한 팀워크를 위해 필참이 원칙이에요! 함께 성장할 준비되셨나요? </S.RequirementText>
        </S.RequirementItem>
        <S.RequirementItem>
          <S.RequirementTitle $isMobile={isMobile}>- 언제 모집하나요?</S.RequirementTitle>
          <S.RequirementText $isMobile={isMobile}>2025년 2월, Farm System 4기를 공개 모집할 예정이에요! 조금만 기다려 주세요 😉</S.RequirementText>
        </S.RequirementItem>
        <S.ButtonContainer>
          <S.ApplyButton $isMobile={isMobile} onClick={() => setPopupOpen(true)}>지원하기</S.ApplyButton>
        </S.ButtonContainer>
        <S.NotificationContainer $isMobile={isMobile}>
          <S.NotificationLink $isMobile={isMobile} href={googleFormLink} target="_blank" rel="noopener noreferrer">
            4기 모집 오픈 알림 신청 ➝
          </S.NotificationLink>
        </S.NotificationContainer>
      </S.RequirementsBox>
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"지금은 모집 기간이 아닙니다."} 
        content={"공개 모집 예정: 2025년 2월"}
      />
    </S.BottomInfoContainer>
  );
};

export default BottomInfo;
