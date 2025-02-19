import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

// 상단들을 감싸는 컨테이너
export const TableContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: end;
  
  height: 10vh;
  min-height: 60px;
`;

export const SubDescription = styled.div`
  height: 30px;
  color: var(--FarmSystem_DarkGrey);
  font-size: 18px;
  font-weight: 400;
`;

/** 프로젝트 리스트(카드)들을 감싸는 컨테이너 */
export const ListContainer = styled.div<{$isTablet: boolean; $isBig: boolean;}>`
  width: 100%;
  margin: 20px auto;
  min-width: ${(props) => (props.$isTablet ? '500px' : '800px')};

  display: grid;
  grid-template-columns: repeat(auto-fit, 300px); /*자동 너비 조정 */
  gap: 20px ${(props) => (props.$isTablet ? "1vw": props.$isBig ? "4vw": "10vw")};
`;

/* 비어 있을 떄 출력하는 레이아웃 잡는 컨테이너 */
export const DescriptionContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: block;
`;

/* 텍스트 컨테이너*/
export const TextContainer = styled.div`

  padding-top: 20vh;
  height: 100px;
  display: flex;

  justify-content: center;
  text-align: center;

  flex-direction: column;
  color: black;
  font-size: 32px;
  font-weight: 600;

  a{
    font-size: 14px;
    font-weight: 300;
  }
  gap: 10px;
`;

