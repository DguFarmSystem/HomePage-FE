import styled from "styled-components";

export const MainContainer = styled.div<{$isApp: boolean, $isMobile: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 2;
  overflow-x: hidden;

  &::before, &::after {
    content: "";
    position: absolute;
    bottom: 0; 
    width: ${(props) => (props.$isMobile ? "6px" : "10px")};
    height: ${({ $isApp, $isMobile }) => ($isApp ? "25%" : $isMobile ? "30%" : "30%")};
    background: linear-gradient(to bottom, 
      rgba(255, 102, 0, 0) 0%, 
      rgba(255, 102, 0, 0.8) 50%, 
      rgba(255, 102, 0, 0) 100%
    );
    z-index: 3;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
