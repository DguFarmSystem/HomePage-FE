import styled from "styled-components";

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "95%" : "100%")}; /* 모바일에서 여백 증가 */
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  text-align: center;
`;


export const CenterContainer = styled.div<{ $isApp: boolean; $isMobile: boolean }>`
  max-width: 1170px;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  margin-top: ${({ $isMobile }) => ($isMobile ? "50px" : "100px")};
`;

export const Title = styled.h2 <{ $isMobile: boolean }>`
  width: 100%;
  padding-left: 5px;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "24px" : "70px")};

  color: var(--FarmSystem_Green01, #28723F);
  text-align: left;
  font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "48px")};
  font-style: normal;
  font-weight: 700;

  line-height: 57px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const GoToUnion = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: end;
  align-items: center;
  
  width: 100%;
  height: 36px;
  cursor: pointer;
  gap: 3px;

  margin-bottom: ${({ $isMobile }) => ($isMobile ? "5px" : "28px")};
`;

export const GoToUnionText = styled.p<{ $isMobile: boolean }>`
  color: var(--FarmSystem_Black, #191919);
  text-align: center;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.24px;
`;

export const OrangeHighlight = styled.span`
  color: var(--FarmSystem_Orange);
`;

export const IconDiv = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${({ $isMobile }) => ($isMobile ? "3px" : "0px")};
  width: ${({ $isMobile }) => ($isMobile ? "12px" : "36px")};
  height: ${({ $isMobile }) => ($isMobile ? "12px" : "36px")};
`;

export const ButtonContainer = styled.div <{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  gap: ${({ $isMobile }) => ($isMobile ? "7px" : "20px")}; /* 모바일에서는 간격 축소 */
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "10px" : "30px")};
`;

export const TrackButton = styled.button<{ $isSelected: boolean; $isMobile: boolean }>`
  display: flex;
  width: ${({ $isMobile, $isSelected }) => 
    $isMobile ? ($isSelected ? "200px" : "160px") : ($isSelected ? "260px" : "260px")};
  height: ${({ $isMobile }) => ($isMobile ? "32px" : "75px")};
  padding:  ${({ $isMobile }) => ($isMobile ? "1px 0" : "10px 0")};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ $isSelected }) =>
    $isSelected
      ? 'var(--FarmSystem_Green05, #248634)'
      : 'var(--FarmSystem_Green04, #49AA59)'};
  box-shadow: ${({ $isMobile }) => ($isMobile ? "none" : "4px 4px 4px 0px rgba(0, 0, 0, 0.25)")};

  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: var(--FarmSystem_Green05, #248634);
  }
`;


export const TrackButtonText = styled.p<{ $isMobile: boolean }>`
  color: var(--FarmSystem_White, #FCFCFC);
  font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 200% */
`; 

export const ButtonContainerMobile = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: end;
  gap: 4px;

  margin-bottom: 10px;
`;

export const TrackButtonMobile = styled.button<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
    $isSelected
      ? 'var(--FarmSystem_Green07, #175321)'
      : 'var(--FarmSystem_Green03, #7AB784)'};
  text-align: center;
  font-size: 3.3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 3px;
`;