import * as S from './FarmSystemNav.styled';
import { useState, useEffect } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import MobileNav from './MobileNav';

const sectionIds = ["about", "tracks", "achievements", "eligibility"];

export default function FarmSystemNav() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = useMediaQueries();
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }      

      // 현재 섹션 확인
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 100) {
            setCurrentSection(section);
          }
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
      setCurrentSection(targetId);
    }
  };

  return (
    <S.FixedNavWrapper isVisible={isVisible} $isMobile={isMobile}>
      {isMobile ? (
        <MobileNav 
          currentSection={currentSection}
          handleSmoothScroll={handleSmoothScroll}
        />
      ) : (
        <S.Navbar $isMobile={isMobile}>
          <S.NavItem $isMobile={isMobile} href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
            <S.Circle $isMobile={isMobile} /> Farm System이란?
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#tracks" onClick={(e) => handleSmoothScroll(e, "#tracks")}>
            <S.Circle $isMobile={isMobile} /> 트랙 및 커리큘럼
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#achievements" onClick={(e) => handleSmoothScroll(e, "#achievements")}>
            <S.Circle $isMobile={isMobile} /> 활동 및 성과
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#eligibility" onClick={(e) => handleSmoothScroll(e, "#eligibility")}>
            <S.Circle $isMobile={isMobile} /> 지원 요건
          </S.NavItem>
        </S.Navbar>
      )}
    </S.FixedNavWrapper>
  );
}
