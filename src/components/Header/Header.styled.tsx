import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: rgb(245, 245, 245); 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
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
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled.a<{ $isMobile: boolean; $isTablet: boolean }>`
  text-decoration: none;
  font-size: ${({$isTablet}) => ($isTablet ? "15px": "18px")}
  font - weight: 500;
  color: #102C19;
  cursor: pointer;
  &:hover {
    color: #28723f;
  }
`;

export const FarmingLogButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #28723f;
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
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 24px;  
  height: 24px;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px; 
  margin-top: 20px;
`;

