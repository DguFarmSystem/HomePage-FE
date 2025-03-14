import styled from 'styled-components';

interface FixedNavProps {
  isVisible: boolean;
  $isMobile: boolean;
}

export const FixedNavWrapper = styled.div<FixedNavProps>`
  position: fixed;
  top: ${({ isVisible, $isMobile }) =>
    !$isMobile ? (isVisible ? "100px" : "-300px") : (isVisible ? "80px" : "-400px")};
  right: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;


export const Navbar = styled.nav<{ $isMobile: boolean }>`
  background-color: rgba(33, 109, 53, 0.7); 
  padding: ${({ $isMobile }) => ($isMobile ? "10px 10px" : "10px 25px;")};
  border-radius: 17px;
  display: flex;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
`;

export const NavItem = styled.a<{ $isMobile: boolean }>`
  color: white;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "14px")};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:first-child {
    font-weight: bold;
  }
`;

export const Circle = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "4px" : "5px")};
  height: ${({ $isMobile }) => ($isMobile ? "4px" : "5px")};
  background-color: white;
  border-radius: 50%;
  margin-right: 6px;
`;
