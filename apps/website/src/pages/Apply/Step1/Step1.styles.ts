import styled from "styled-components";

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  /* position: absolute;
  top: 10px; */
`;

export const ApplyTitle = styled.p<{ $isApp: boolean, $isMobile: boolean }>`
  position: absolute; /* 상단 고정 */
  top: 80px;
  text-align: center;
  color: var(--FarmSystem_Green01);
  font-size: ${(props) => (props.$isMobile ? "25px" : "25px")};
  font-weight: 700;
`;

export const FarmLogo = styled.img`
  width: 60px;  
`;

export const HelloText = styled.p<{ $isMobile: boolean }>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2F2F2F;
  font-size: ${(props) => (props.$isMobile ? "23px" : "23px")};
  font-weight: 600;
  margin-top: 5px;
`;

export const QuestionText = styled.p<{ $isMobile: boolean }>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3A3A3A;
  font-size: ${(props) => (props.$isMobile ? "15px" : "18px")};
  font-weight: 500;
  margin-top: 10px;
  /* background-color: orange; */
`;

export const ButtonContainer = styled.div<{ $isMobile: boolean }>`
  /* width: 100%;
  max-width: 355px; */
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  padding-inline: 30px;
`;


export const Button = styled.div<{ $isMobile: boolean; bgColor?: string; textColor?: string }>`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border-radius: 15px;
  cursor: pointer;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "14px")};
  font-weight: 600;
  background-color: ${({ bgColor }) => bgColor || "var(--FarmSystem_Green01)"}; 
  color: ${({ textColor }) => textColor || "#FFFFFF"};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ bgColor }) => bgColor ? `${bgColor}CC` : "var(--FarmSystem_Green02)"}; 
    transform: scale(1.05);
  }
`;

export const BottomText = styled.p<{ $isMobile: boolean }>`
  text-align: center;
  color: #3A3A3A;
  font-size: ${(props) => (props.$isMobile ? "13px" : "16px")};
  font-weight: 400;
`;

export const Arrow = styled.img`
  width: 20px;  
  height: 20px;
`;

export const BottomTextContainer = styled.div<{ $isMobile: boolean }>`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  /* background-color: orange; */

  &:hover {
    transform: scale(1.05);
  }
  
`;