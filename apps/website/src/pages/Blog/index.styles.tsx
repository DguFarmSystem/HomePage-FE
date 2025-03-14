import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 10%;
`;

export const ButtonWrapper = styled.div<{$isTablet: boolean; $isMobile: boolean;}>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${(props) => (props.$isMobile ? "50px" : props.$isTablet ? "100px" : "100px")};
`;

export const ButtonContainer = styled.div`
  width: 330px;
  height: 100px;
  margin-top: 10vh; 
  display: flex;
  justify-content: left;
  gap: 5px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ActiveTabIndicator = styled.div<{$isTablet: boolean; $isMobile: boolean;}>`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.$isMobile ? "14px" : "20px")};
`;

export const ToggleButton = styled.button<{ active: boolean; $isMobile: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${(props) => (props.active ? (props.$isMobile ? '28px' : '40px') : (props.$isMobile ? '20px' : '32px'))};
  font-weight: 600;
  color: ${(props) => (props.active ? 'var(--FarmSystem_Green01)' : 'var(--FarmSystem_DarkGrey)')};
  width: ${(props) => (props.$isMobile ? "110px": "170px")};
  padding-right: 5px;
`;

export const Divider = styled.div<{ $isMobile: boolean }>`
  margin: ${(props) => (props.$isMobile ? "0px 0px 0px 0px": "0px 0px 0px 10px")};
  font-size: ${(props) => (props.$isMobile ? '30px' : '64px')};
  font-weight: 200;
  color: var(--FarmSystem_DarkGrey);
  display: flex;
  align-items: center;
  justify-content: center;
`;