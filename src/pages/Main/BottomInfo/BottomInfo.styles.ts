import styled from 'styled-components';

export const BottomInfoContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 100vw;
  max-width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100%" : $isTablet ? "90%" : "1440px")};
  margin: 80px auto;
  text-align: center;
  padding: ${({ $isMobile }) => ($isMobile ? "40px 0" : "60px 0")};
`;

export const Title = styled.h2<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "98vw" : "none" )}; 
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "22px" : $isTablet ? "32px" : "36px")};
  color: #191919;
  font-weight: bold;
  text-align: center;
  margin: 0 auto; /*마진을 통한 중앙 정렬*/
  padding-bottom: 30px; /* 링크 버튼과 거리 두기*/
`;

export const Highlight = styled.span`
  color: #28723f;
`;

export const IconsContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  justify-content: center;
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
  margin-bottom: 40px;
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
  background-color: #e5e5e5;
  border-radius: 10px;
  padding: ${({ $isMobile }) => ($isMobile ? "30px" : "50px")};
  margin: 0 auto;
  text-align: left;
`;

export const RequirementItem = styled.div`
  margin-bottom: 20px;
`;

export const RequirementsTitle = styled.h3<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "24px" : $isTablet ? "28px" : "32px")};
  color: #175321;
  margin-bottom: 40px;
`;

export const RequirementTitle = styled.h4<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
  font-weight: bold;
`;

export const RequirementText = styled.p<{ $isMobile: boolean }>`
margin-top: 10px;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const ApplyButton = styled.button<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "180px" : "240px")};
  background-color: #49aa59;
  color: #ffffff;
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "20px")};
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
  &:hover {
    background-color: #3b8a48;
  }
`;


export const NotificationContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: ${({ $isMobile }) => ($isMobile ? "12px" : "20px")};
`;

export const NotificationLink = styled.a<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "18px")};
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
