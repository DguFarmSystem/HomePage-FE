// src/components/Ranking/CheerBalloon.styles.ts
import styled from 'styled-components';

export const BalloonWrapper = styled.div<{ isApp: boolean, isVisible: boolean }>`
  width: ${({ isApp }) => (isApp ? '160px' : '210px')};
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  background: white;
  border-radius: 40px;
  padding: 12px 16px;
  display: flex;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  /* transform: translate(-195%, -520%); */
  z-index: 999;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.8)')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  /* 말풍선 꼬리 (아래쪽 삼각형) */
  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 20px 20px 0 20px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: #5cd282;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const IconImg = styled.img<{ isApp: boolean }>`
  width: ${({ isApp }) => (isApp ? '45px' : '50px')};
  height: ${({ isApp }) => (isApp ? '45px' : '50px')};
  background: #5cd282;
  border-radius: 50%;
  padding: 10px;
  padding-bottom: 15px;
  object-fit: contain;
  transition: background-color 0.2s ease;
`;

export const Label = styled.span<{ isApp: boolean }>`
  margin-top: ${({ isApp }) => (isApp ? '3px' : '6px')};
  font-size: ${({ isApp }) => (isApp ? '10px' : '12px')};
  color: black;
  font-weight: 600;
`;

export const Option = styled.div<{ isApp: boolean }>`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  ${({ isApp }) =>
    !isApp &&
    `
    &:hover {
      transform: scale(1.05);

      img {
        background-color: #45be72;
      }

      span {
        color: #45be72;
      }
    }
  `}
`;