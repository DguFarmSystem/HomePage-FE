import styled from 'styled-components';

export const BottomInfoContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 100vw;
  max-width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100%" : $isTablet ? "90%" : "1440px")};
  margin: 80px auto;
  text-align: center;
  padding: ${({ $isMobile }) => ($isMobile ? "40px 0" : "60px 0")};
`;

export const Title = styled.h2<{ $isApp: boolean; $isMobile: boolean; $isTablet: boolean }>`
  width: ${({  $isMobile }) => ($isMobile ? "98vw" : "none" )}; 
  font-size: ${({ $isApp, $isMobile, $isTablet }) => ($isApp ? "19px" : $isMobile ? "22px" : $isTablet ? "32px" : "36px")};
  color: #191919;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 50px; 
`;

export const Highlight = styled.span`
  color: #28723f;
  font-weight: bold;
`;

export const IconsContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  justify-content: center;
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
  margin-top: 60px;
`;

export const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img<{ $isMobile: boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "50px" : "70px")};
  height: ${({ $isMobile }) => ($isMobile ? "50px" : "70px")};
  object-fit: cover;
`;

export const RequirementsBox = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "90%" : $isTablet ? "80%" : "900px")};
  background-color: var(--FarmSystem_LightGrey);
  border-radius: 10px;
  padding: ${({ $isMobile }) => ($isMobile ? "30px" : "50px")};
  margin: 0 auto;
  text-align: left;
`;

export const RequirementItem = styled.div`
  margin-bottom: 20px;
`;

export const RequirementsTitle = styled.h3<{ $isApp: boolean; $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isApp, $isMobile, $isTablet }) => ($isApp ? "18px" : $isMobile ? "24px" : $isTablet ? "28px" : "32px")};
  color: #175321;
  margin-bottom: ${({$isApp, $isMobile }) => ($isApp ? "10px" : $isMobile ? "20px" : "40px")};
`;

export const RequirementTitle = styled.h4<{ $isApp: boolean; $isMobile: boolean }>`
  font-size: ${({ $isApp, $isMobile }) => ($isApp ? "14px" : $isMobile ? "18px" : "24px")};
  font-weight: bold;
`;

export const RequirementText = styled.p<{ $isApp: boolean; $isMobile: boolean }>`
  margin-top: ${({ $isApp, $isMobile }) => ($isApp ? "5px" : $isMobile ? "7px" : "10px")};
  font-size: ${({ $isApp, $isMobile }) => ($isApp ? "12px" : $isMobile ? "14px" : "20px")};
  font-weight: 300;
`;

export const ButtonContainer = styled.div<{ $isApp: boolean; $isMobile: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({$isApp, $isMobile }) => ($isApp ? "10px" : $isMobile ? "20px" : "40px")};
`;

export const ApplyButton = styled.button<{ $isApp: boolean; $isMobile: boolean, isRecruit: boolean }>`
  width: ${({ $isApp, $isMobile }) => ($isApp ? "110px" : $isMobile ? "180px" : "240px")};
  background-color: ${({ isRecruit }) => (isRecruit
    ? "var(--FarmSystem_Green04, #49aa59) "
    : "var(--FarmSystem_DarkGrey, #999999)"
  )};
  color: #ffffff;
  font-size: ${({ $isApp, $isMobile }) => ($isApp ? "14px" : $isMobile ? "18px" : "20px")};
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
  &:hover {
    background-color:${({ isRecruit }) => (isRecruit
      ? "#3b8a48" : "var(--FarmSystem_DarkGrey, #999999)"
    )};
  }
`;


export const NotificationContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: ${({ $isMobile, $isTablet }) => ($isMobile ? "0px" : $isTablet ? "12px" : "20px")};
`;

export const NotificationLink = styled.a<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "18px")};
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: underline;
    color: #28723f;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(113, 113, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBox = styled.div`
  width: 500px;
  background-color: #fcfcfc;
  border: 3px solid #28723f;
  border-radius: 15px;
  text-align: center;
  padding: 40px;
`;

export const PopupText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const PopupCloseButton = styled.button`
  background-color: #28723f;
  color: #fcfcfc;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
  width: 100px;
  margin-top: 20px;

  &:hover {
    background-color: #1f5b30;
  }
`;
