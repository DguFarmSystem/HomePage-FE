import styled from 'styled-components';

export const FrameGroup = styled.div<{ $isMobile: boolean; $isTablet: boolean; $isApp: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px;
  margin-bottom: 30px;
  width: 100%;
`;

export const QParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Q = styled.b<{ $isApp: boolean; }>`
  position: relative;
  font-size: ${({ $isApp}) => ($isApp ? '28px' : '28px')};
`;

export const A = styled.b`
  position: relative;
  left: 2px;
  top: -8px;
  font-size: 28px;
`;

export const FarmSystem = styled.b`
  position: relative; 
  font-size: 19px;
  color: #000;
`;

export const FrameChild = styled.img`
  width: 100%;
  max-height: 100%;
`;

export const GradientLine = styled.div`
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to right, #49aa59, #ff7f1e);
  margin: 1vh 0;
  align-self: center;
`;

export const AParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  color: #49aa59;
  width: 100%;
`;

export const FarmContainer = styled.div`
  width: 100%;
  font-size: 16px;
  color: #000;
`;

export const P = styled.p`
  margin: 0;
`;