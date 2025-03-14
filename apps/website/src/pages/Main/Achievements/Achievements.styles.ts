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

export const Title = styled.h2<{ $isApp:boolean, $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "340px" : $isTablet ? "510px" : "670px")};
  font-size: ${({ $isApp, $isMobile, $isTablet }) => ($isApp ? "21px" : $isMobile ? "24px" : $isTablet ? "36px" : "48px")};
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

// 왼쪽 버튼
export const LeftButton = styled.button<{ $isMobile: boolean;}>`
  position: absolute;
  left: 5vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ $isMobile }) => ($isMobile ? 
    `
      left: 0;
      height: 100%;
      padding-right: 10px;
      padding-left: 5%;
      img{
        width: 20px;
        height: 20%;
      }
    `:
    `
      img{
        height: 10%;
      }

    `
    )}
`;

// 오른쪽 버튼
export const RightButton = styled.button<{ $isMobile: boolean;}>`
  position: absolute;
  right: 5vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ $isMobile }) => ($isMobile ? 
    `
      right: 0;
      height: 100%;
      padding-left: 10px;
      padding-right: 5%;
      img{
        width: 20px;
        height: 20%;
      }
    `:
    `
      img{
       height: 10%;
      }

    `
    )}
`;


