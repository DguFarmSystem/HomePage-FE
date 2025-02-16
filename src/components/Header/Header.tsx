import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from './Header.styled';
import Popup from '../Popup/Popup';
import Hamburger from '../../assets/Icons/Hamburger.png';
import CloseIcon from '../../assets/Icons/close.png';
import useMediaQueries from '@/hooks/useMediaQueries';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isMobile, isTablet } = useMediaQueries();

  const onContainerClick = useCallback(() => {}, []);

  const handleNavItemClick = (path?: string) => {
    if (path) navigate(path);
    setMenuOpen(false);
  };

  return (
    <S.HeaderContainer>
      {isMobile ? (
        <S.MobileHeader>
          <S.Logo onClick={() => navigate('/')}>Farm System</S.Logo>
          <S.HamburgerIcon src={Hamburger} alt="Menu" onClick={() => setMenuOpen(true)} />
        </S.MobileHeader>
      ) : (
        <>
          <S.Logo onClick={() => navigate('/')}>Farm System</S.Logo>
          <S.NavWrapper>
            <S.Nav>
              <S.NavItem  $isTablet={isTablet} $isMobile={isMobile} onClick={() => navigate('/')}>홈</S.NavItem>
              <S.NavItem  $isTablet={isTablet} $isMobile={isMobile} onClick={() => setPopupOpen(true)}>블로그 / 프로젝트</S.NavItem>
              <S.NavItem  $isTablet={isTablet} $isMobile={isMobile} onClick={() => setPopupOpen(true)}>소식</S.NavItem>
              <S.NavItem  $isTablet={isTablet} $isMobile={isMobile} onClick={() => setPopupOpen(true)}>FAQ</S.NavItem>
            </S.Nav>
            <S.FarmingLogButton onClick={onContainerClick}>파밍로그</S.FarmingLogButton>
          </S.NavWrapper>
        </>
      )}

      <S.MobileNavWrapper $isMenuOpen={isMenuOpen}>
        {isMobile && (
          <>
            <S.CloseButton src={CloseIcon} alt="Close Menu" onClick={() => setMenuOpen(false)} />
            <S.MobileNav>
              <S.NavItem $isTablet={isTablet} $isMobile={isMobile} onClick={() => handleNavItemClick('/')}>홈</S.NavItem>
              <S.NavItem $isTablet={isTablet} $isMobile={isMobile} onClick={() => handleNavItemClick()}>블로그 / 프로젝트</S.NavItem>
              <S.NavItem $isTablet={isTablet} $isMobile={isMobile} onClick={() => handleNavItemClick()}>소식</S.NavItem>
              <S.NavItem $isTablet={isTablet} $isMobile={isMobile} onClick={() => handleNavItemClick()}>FAQ</S.NavItem>
              <S.NavItem $isTablet={isTablet} $isMobile={isMobile} onClick={() => handleNavItemClick()}>파밍로그</S.NavItem>
            </S.MobileNav>
          </>
        )}
      </S.MobileNavWrapper>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"아직 오픈되지 않았습니다."} 
        content={"오픈 예정: 2025년 4월"} 
      />
    </S.HeaderContainer>
  );
}
