import { useState } from 'react';
import * as S from './MobileNav.styled';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  currentSection: string;
  handleSmoothScroll: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => void;
}

const navItems = [
  { id: "about", text: "Farm System이란?" },
  { id: "tracks", text: "트랙 및 커리큘럼" },
  { id: "achievements", text: "활동 및 성과" },
  { id: "eligibility", text: "지원 요건" },
];

export default function MobileNav({
  currentSection,
  handleSmoothScroll,
}: MobileNavProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentNavItem =
    navItems.find((item) => item.id === currentSection) ?? navItems[0];


  if(currentSection === "about") {
    return null;
  }

  return (
    <S.MobileNavbar isNavOpen={isNavOpen} isAbout={currentSection === "about"}>
      {/* 
        isNavOpen이 false면 첫 번째 메뉴만 보이게, 
        true면 모든 메뉴가 보이게 설정 
      */}
      {!isNavOpen && (
        <S.MobileNavItem
          href={"#" + currentNavItem.id}
          onClick={(e) => handleSmoothScroll(e, currentNavItem.id)}
        >
          <S.MobileNavText>{currentNavItem.text}</S.MobileNavText>
        </S.MobileNavItem>
      )}

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          <S.MobileNavItem
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            <S.MobileNavText>Farm System이란?</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem
            href="#tracks"
            onClick={(e) => handleSmoothScroll(e, "#tracks")}
          >
            <S.MobileNavText>트랙 및 커리큘럼</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem
            href="#achievements"
            onClick={(e) => handleSmoothScroll(e, "#achievements")}
          >
            <S.MobileNavText>활동 및 성과</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem
            href="#eligibility"
            onClick={(e) => handleSmoothScroll(e, "#eligibility")}
          >
            <S.MobileNavText>지원 요건</S.MobileNavText>
          </S.MobileNavItem>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 확장/축소 버튼 */}
      <S.ExpandButton onClick={() => setIsNavOpen((prev) => !prev)}>
        {isNavOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </S.ExpandButton>
    </S.MobileNavbar>
  );
}
