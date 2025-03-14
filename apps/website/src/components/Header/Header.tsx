import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from './Header.styled';
import Popup from '../Popup/Popup';
import Hamburger from '../../assets/Icons/Hamburger.png';
import CloseIcon from '../../assets/Icons/Close2.png';
import useMediaQueries from '@/hooks/useMediaQueries';

const IS_RECRUIT = false; // 모집 모드 ON/OFF 설정은 여기서 해주시면 됩니다.

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useMediaQueries();

  const handleNavItemClick = (path?: string) => {
    if (path) navigate(path);
    setMenuOpen(false);
  };

  const handleRecruitClick = () => {
    if (IS_RECRUIT) {
      navigate('/recruit');
    } 
    // else {
    //   setPopupOpen(true);
    // }
  };

  return (
    <S.HeaderContainer $isMobile={isMobile}>
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
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/')} 
                isActive={location.pathname === '/'}
              >
                홈
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/blog')} 
                isActive={location.pathname === '/blog'}
              >
                블로그 / 프로젝트
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/news')} 
                isActive={location.pathname === '/news'}
              >
                소식
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/FAQ')} 
                isActive={location.pathname === '/FAQ'}
              >
                FAQ
              </S.NavItem>
            </S.Nav>
          </S.NavWrapper>
          <S.FarmingLogButton
            isRecruit={IS_RECRUIT}
            onClick={handleRecruitClick}
          >
            지원하기
          </S.FarmingLogButton>
        </>
      )}

      <S.MobileNavWrapper $isMenuOpen={isMenuOpen}>
        {isMobile && (
          <>
            {/* 닫기 아이콘 추가 */}
            <S.CloseButton src={CloseIcon} alt="Close" onClick={() => setMenuOpen(false)} />
           

            <S.MobileNav>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/')} 
                isActive={location.pathname === '/'}
              >
                홈
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/blog')} 
                isActive={location.pathname === '/blog'}
              >
                블로그 / 프로젝트
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/news')} 
                isActive={location.pathname === '/news'}
              >
                소식
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/FAQ')} 
                isActive={location.pathname === '/FAQ'}
              >
                FAQ
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile}
                onClick={handleRecruitClick}
                isActive={false}
              >
                지원하기
              </S.NavItem>
            </S.MobileNav>
          </>
        )}
      </S.MobileNavWrapper>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"지금은 모집 기간이 아니에요."} 
        content={"3월 13일까지 지원 가능해요."} 
      />
    </S.HeaderContainer>
  );
}
