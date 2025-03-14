import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(113, 113, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PopupBox = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "300px" : $isTablet ? "420px" : "500px")};
  background-color: #fcfcfc;
  border-radius: 15px; 
  text-align: center;
  padding: ${({ $isMobile }) => ($isMobile ? "30px" : "40px")};
  z-index: 10000;
`;

export const PopupTitle = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "22px")};
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

export const PopupText = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: 18px;
  font-size: ${({ $isMobile, $isTablet }) => ( $isMobile ? "13px" : $isTablet ? "15px" : "17px")};
  color: black;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
`;

export const PopupCloseButton = styled.button<{ $isMobile: boolean; $isTablet: boolean }>`
  background-color: #28723f;
  color: #fcfcfc;
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "12px" : $isTablet ? "16px": "16px")};
  padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "12px 24px" : $isTablet ? "12px 24px": "10px 20px")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "80px" : $isTablet ? "100px": "100px")};
  margin-top: 20px;
  &:hover {
    background-color: #1f5b30;
  }
`;

export const ButtonContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: space-around;
  padding-inline: ${({ $isMobile }) => ($isMobile ? "10px" : "40px")};
`;

export const PopupButton = styled.button<{ $isMobile: boolean; $isTablet: boolean; confirm?: boolean }>`
  background-color: #28723f;
  color: #fcfcfc;
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "12px" : $isTablet ? "16px": "16px")};
  padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "12px 24px" : $isTablet ? "12px 24px": "10px 20px")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  /* box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2); */
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "80px" : $isTablet ? "100px": "100px")};
  margin-top: 20px;
  &:hover {
    opacity: 0.8
  }
`;
