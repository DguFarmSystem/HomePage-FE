import styled from 'styled-components';

const media = {
  mobile: '@media (max-width: 480px)',
  tablet: '@media (max-width: 768px)',
  app: '@media (max-width: 1024px)',
};

export const FrameParent = styled.div<{ $isApp: boolean; $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
  color: #757575;
  font-size: 40px; 

  ${({ $isMobile }) => $isMobile && `
    font-size: 30px; 
    flex-wrap: wrap;         
    width: 350px;         
    justify-content: center;
  `}

  ${({ $isTablet }) => $isTablet && `
    font-size: 35px; 
  `}

  ${({ $isApp }) => $isApp && `
    gap: 10px;
    font-size: 40px; 
    flex-wrap: wrap;         
    width: 300px;         
    justify-content: center;
  `}
`;

export const Container = styled.button<{ isSelected: boolean, $isApp: boolean; $isMobile: boolean; $isTablet: boolean }>`
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#006811' : '#f1f1f1')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#757575')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  font-weight: 550;
  letter-spacing: -0.24px;

  height: 33px;
  padding: 5px 20px;

  &:hover {
    background-color: #006811;
    color: #ffffff;
  }

  ${({ $isMobile }) => $isMobile && `
     height: 33px;
     padding: 5px 20px;
  `}

  ${({ $isTablet }) => $isTablet && `
     height: 33px;
     padding: 5px 20px;
  `}

  ${({ $isApp }) => $isApp && `
    height: 33px;
    padding: 5px 15px;
  `}
`;

export const Div = styled.div`
  letter-spacing: -0.24px;
  line-height: 2vh;
  font-weight: 600;

  ${media.mobile} {
    line-height: 1.5vh;
    font-size: 3vw;
  }

  ${media.tablet} {
    line-height: 1.8vh;
    font-size: 2vw;
  }

  ${media.app} {
    line-height: 2vh;
    font-size: 1.8vw;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 2vh;
  color: #757575;
  cursor: pointer;

  font-size: 1.6vw;

  &:hover {
    background-color: #006811;
    color: #ffffff;
  }

  ${media.mobile} {
    font-size: 4vw;
  }

  ${media.tablet} {
    font-size: 2.5vw;
  }

  ${media.app} {
    font-size: 2vw;
  }
`;
