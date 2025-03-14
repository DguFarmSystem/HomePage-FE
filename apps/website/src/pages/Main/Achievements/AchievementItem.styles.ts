import styled from 'styled-components';

export const ItemContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "280px" : $isTablet ? "330px" : "390px")};
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "285px" : $isTablet ? "340px" : "400px")}; 
  margin-left: 30px;
  margin-right: 30px;
  background-color: var(--FarmSystem_Green07);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "75%" : "75%")}; 
  object-fit: cover;
`;

export const Content = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${({ $isMobile }) => ($isMobile ? "25%" : "25%")}; 
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
`;

export const Title = styled.h3<{ $isMobile: boolean, $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px" : $isTablet ? "11.5px" : "14px")};
  color: var(--FarmSystem_White);
`;

export const Description = styled.p<{ $isMobile: boolean, $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "18px" : "20px")};
  font-weight: bold;
  color: var(--FarmSystem_White);
  line-height: 1.5;
`;
