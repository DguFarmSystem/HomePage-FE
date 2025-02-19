import styled from 'styled-components';

export const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2vw;
  text-align: center;
  font-size: 1.6vw;
  color: #757575;
`;

export const Container = styled.button<{ isSelected: boolean }>`
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#006811' : '#f1f1f1')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#757575')};
  height: 7vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5vw 2vw;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  font-size: 1vw;
  font-weight: 550;
  letter-spacing: -0.24px;
  &:hover {
    background-color: #006811;
    color: #ffffff;
  }
`;

export const Div = styled.div`
  letter-spacing: -0.24px;
  line-height: 2vh;
  font-weight: 600;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.6vw;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 2vh;
  color: #757575;
  cursor: pointer;
  &:hover {
    background-color: #006811;
    color: #ffffff;
  }
`;