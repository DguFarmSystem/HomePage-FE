import styled from "styled-components";

export const HeaderContainer = styled.header<{ $isMobile: boolean }>`
  position: fixed;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "55px" : "70px")}; 
  background-color: rgb(245, 245, 245); 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $isMobile }) => ($isMobile ? "0 20px" : "0 25px")}; 
  z-index: 1000;
`;


export const MobileHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color:  #102C19;
  letter-spacing: -0.24px;
  cursor: pointer;
  user-select: none;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  flex-grow: 1;

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const NavItem = styled.a<{ $isMobile: boolean; $isTablet: boolean; isActive: boolean }>`
  text-decoration: none;
  font-size: ${({$isMobile, $isTablet}) => ($isMobile ? "15px" : $isTablet ? "15px": "18px")};
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? "#28723f" : "#102C19")};
  cursor: pointer;
  position: relative;
  &:hover {
    color: #28723f;
  }
  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #28723f;
  }
  ${({ isActive }) => isActive && `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: #28723f;
    }
  `}
`;

export const FarmingLogButton = styled.button<{ isRecruit: boolean}>`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ isRecruit }) => (isRecruit
    ? "var(--FarmSystem_Green01, #28723f)" 
    : "var(--FarmSystem_DarkGrey, #999999)"
  )};
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
`;

export const HamburgerIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const MobileNavWrapper = styled.div<{ $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(245, 245, 245); 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ $isMenuOpen }) => ($isMenuOpen ? "20px 0" : "0")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: ${({ $isMenuOpen }) => ($isMenuOpen ? "auto" : "0")};
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "1" : "0")};
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease, opacity 0.3s ease, height 0.3s ease;
  overflow: hidden;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 19px;
  right: 20px;
  cursor: pointer;
  width: 26px;  
  height: 26px;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px; 
  margin-top: 20px;
`;
