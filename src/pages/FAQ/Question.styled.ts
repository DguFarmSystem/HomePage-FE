import styled from 'styled-components';

export const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2vh;
  margin: 2vh 0;
  width: 100%;
`;

export const QParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5vw;
  width: 100%;
`;

export const Q = styled.b`
  letter-spacing: -0.24px;
  line-height: 2vh;
  font-size: 3.6vh;
`;

export const FarmSystem = styled.b`
  font-size: 3.0vh;
  letter-spacing: -0.24px;
  line-height: 3vh;
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
  gap: 1.5vw;
  color: #49aa59;
  width: 100%;
`;

export const FarmContainer = styled.div`
  width: 100%;
  font-size: 2vh;
  letter-spacing: -0.24px;
  line-height: 3.6vh;
  color: #000;
  font: prettendard-variable;
`;

export const P = styled.p`
  margin: 0;
`;