import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-y: auto;
`;

export const NewsPageTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--FarmSystem_Green01, #28723F);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 100% */

  padding: 10px 20px;
  width: 100%;
  max-width: 1100px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const Message = styled.div<{$isMobile: boolean;}>`
  padding-top: 20vh;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: black;
  font-size: ${(props) => (props.$isMobile ? "20px" : "32px")};
  font-weight: 600;
  margin-bottom: 35px; 
`;

export const MiniMessage = styled.p<{$isMobile: boolean;}>`
  font-size: ${(props) => (props.$isMobile ? "10px" : "14px")};
  font-weight: 400;
  margin-top: 10px;
`;

export const NewsContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  margin-top: 70px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: var(--FarmSystem_Green01, #28723F);
  border: none;
  
  padding: 0 20px;
  width: 100%;
  max-width: 1100px;
  margin: 30px 0;
`;
