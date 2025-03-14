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
export const TableContainer = styled.div<{$isTablet: boolean; $isMobile: boolean;}>`
  display: flex;
  gap: 30px;
  justify-content: flex-end; /* 왼쪽 정렬 */
  height: 10vh;
  width: 100%;
  margin-top: ${(props) => (props.$isMobile ? '0px' : props.$isTablet ? '15px' : '60px')};
`;

export const SubDescription = styled.div<{$isMobile: boolean;}>`
  color: var(--FarmSystem_DarkGrey);
  font-size: ${(props) => (props.$isMobile ? "10px" : "18px")};
  padding-top: ${($isMobile) => ($isMobile ? "5vh":"")};
  font-weight: 400;
  width: 100%;
  text-align: right; /* 오른쪽 정렬 */
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
  display: flex;
  margin-bottom: 100px; 
`;

/* 텍스트 컨테이너*/
export const TextContainer = styled.div<{$isMobile: boolean;}>`
  padding-top: 20vh;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: black;
  font-size: ${(props) => (props.$isMobile ? "20px" : "32px")};
  font-weight: 600;
  margin-bottom: 200px;


  a {
    font-size: ${(props) => (props.$isMobile ? "10px" : "14px")};
    font-weight: 300;
  }
  gap: 10px;
`;

