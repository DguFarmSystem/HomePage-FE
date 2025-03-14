import styled from "styled-components";

export const FooterContainer = styled.footer<{ $isMobile: boolean}>`
    width: 100%;
    height: ${({ $isMobile }) => ($isMobile ? "150px" : "110px")};
    background-color: var(--FarmSystem_LightGrey);
`;

export const FooterContent = styled.div<{ $isMobile: boolean}>`

  display: flex;
  justify-content: ${({ $isMobile }) => ($isMobile ? "center" : "space-between")};
  align-items: center;
  ${({ $isMobile }) => ($isMobile ? "flex-direction: column;" : "none")};

  padding: 15px 30px;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
   
`;

export const FooterTitle = styled.div<{ $isMobile: boolean}>`
  font-weight: 500;
  font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "24px")};
  color: var(--FarmSystem_Green06);

  display: flex;
  flex-direction: row;
  ${({ $isMobile }) => ($isMobile ? "justify-content: center;" : "none")}
`;

export const FooterDescription = styled.div<{$isMobile: boolean}>`
  font-weight: 300;
  line-height: 22px;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
  ${({ $isMobile }) => ($isMobile ? "justify-content: center;" : "padding-top: 10px;")}
`;




export const IconsContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  display: flex;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "30px")};
  width: ${({ $isMobile }) => ($isMobile ? "200px" : "250px")};
  margin-top: 15px; 
`;

export const IconLink = styled.a<{$isMobile: boolean;}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $isMobile }) => ($isMobile ? "margin: 5px auto;" : "none")}

  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
  width: ${({ $isMobile }) => ($isMobile ? "30px" : "40px")};
  height: ${({ $isMobile }) => ($isMobile ? "30px" : "40px")};
  background-color: var(--FarmSystem_DarkGrey);
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img<{ $isMobile: boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "15px" : "25px")};
  height: ${({ $isMobile }) => ($isMobile ? "15px" : "25px")};
  object-fit: cover;
`;

export const Logo = styled.img<{ $isMobile: boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "30px" : "35px")};
  height: ${({ $isMobile }) => ($isMobile ? "30px" : "35px")};
  object-fit: cover;
`;