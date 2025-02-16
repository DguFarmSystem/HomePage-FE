import styled from 'styled-components';

export const AchievementsContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 100vw; 
  min-width: 100%;
  padding: ${({ $isMobile }) => ($isMobile ? "40px 0" : "60px 0")};
  text-align: center;
  overflow-x: hidden; 
  position: relative;
  z-index: 0;
  align-items: ${({ $isMobile}) => ($isMobile ? "center" : "flex-start")};
`;

export const TitleArea = styled.div<{ $isMobile: boolean}>`
  display: flex;
  justify-content: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};
`;

export const Title = styled.h2<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "340px" : $isTablet ? "510px" : "670px")};
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "24px" : $isTablet ? "36px" : "48px")};
  color: #191919;
  font-weight: bold;
  margin-bottom: 40px;
  margin-left: ${({ $isMobile }) => ($isMobile ? "0px" : "90px")};
  text-align: ${({ $isMobile }) => ($isMobile ? "center" : "left")};
`;

export const Highlight = styled.span`
  color: #28723f;
`;

export const SliderWrapper = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 100vw;
  position: relative; 
  overflow: visible; 
  z-index: 0;

  display: flex;
  justify-content: center; 
  gap: ${({ $isMobile, $isTablet }) => ($isMobile ? "5px" : $isTablet ? "10px" : "20px")};

  .slick-list {
    width: 100vw;
    margin: 0;
    padding: 20px 0; 
    min-height: auto; 
  }

  .slick-track {
    display: flex;
    align-items: stretch; 
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    overflow: visible; 
  }

  /* 블러 효과 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: ${({ $isMobile, $isTablet }) => ($isMobile ? "90px" : $isTablet ? "250px" : "400px")};
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  }
`;


export const StatsContainer = styled.div<{ $isMobile: boolean }>`
  width: "80%";
  display: flex;
  justify-content: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "30px")};
  margin-top: ${({ $isMobile }) => ($isMobile ? "40px" : "60px")};
  flex-wrap: wrap;
  padding-left: 30px;
  padding-right: 30px;
`;

const statColors = ["#62de88", "#5ccc7e", "#50b46f", "#48a164"];

export const StatBox = styled.div<{ index: number; $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "140px" : $isTablet ? "220px" : "270px")};
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "140px" : $isTablet ? "220px" : "250px")};
  border-radius: 20px;
  background-color: ${({ index }) => statColors[index]}; /* 각 박스마다 다른 색상 적용 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatNumber = styled.div<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "48px")};
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

export const StatLabel = styled.div<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
  font-weight: 500;
  color: #fff;
`;
