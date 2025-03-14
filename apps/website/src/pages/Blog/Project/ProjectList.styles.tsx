import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

/** 필터 영역 전체 컨테이너 */
export const TableContainer = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: flex-start;
  margin-top: ${(props) => (props.$isMobile ? '0px' : props.$isTablet ? '15px' : '60px')};
`;


/** 필터 버튼과 드롭다운을 감싸는 컨테이너 */
export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-top: 30px;
`;

/** 기수 버튼 */
export const FilterGradeButton = styled.button<{$isMobile: boolean; $isTablet: boolean;}>`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => (props.$isMobile ? '15px' : '8px')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.$isMobile ? '12px' : props.$isTablet ? '14px' : '16px')};
  font-weight: 500;
  width: ${(props) => (props.$isMobile ? '80px' : props.$isTablet ? '70px' : '80px')}; /* 기수 버튼은 작게 */
`;

/** 트랙 버튼 */
export const FilterTrackButton = styled.button<{$isMobile: boolean; $isTablet: boolean;}>`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => (props.$isMobile ? '15px' : '8px')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.$isMobile ? '12px' : props.$isTablet ? '14px' : '16px')};
  font-weight: 500;
  width: ${(props) => (props.$isMobile ? '90px' : props.$isTablet ? '110px' : '130px')}; /* 트랙 버튼은 큼 */
`;

/** 기수 드롭다운 */
export const DropdownGradeMenu = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  position: absolute;
  top: 45px;
  left: 0;
  width: ${(props) => (props.$isMobile ? '80px' : props.$isTablet ? '70px' : '80px')}; /* 기수 버튼과 동일한 크기 */
  text-align: left;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--FarmSystem_LightGrey);
  box-shadow: 4px 4px 4px 0px #00000040;
  z-index: 999;
`;

/** 트랙 드롭다운 */
export const DropdownTrackMenu = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  position: absolute;
  top: 45px;
  left: 0;
  width: ${(props) => (props.$isMobile ? '90px' : props.$isTablet ? '110px' : '130px')}; /* 트랙 버튼과 동일한 크기 */
  text-align: left;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--FarmSystem_LightGrey);
  box-shadow: 4px 4px 4px 0px #00000040;
  z-index: 999;
`;

/** 드롭다운 아이템 */
export const DropdownItem = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  padding: ${({$isMobile})=>($isMobile ? '8px 12px' : '8px 18px')};
  cursor: pointer;
  font-size: ${(props) => (props.$isMobile ? '10px' : props.$isTablet ? '12px' : '14px')};
  color: #333;
  
  &:hover {
    background-color: #f0fff0;
    border-radius: 8px;
  }
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
  margin: 20px;
  display: block;
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

export const Wrapper = styled.div`
  margin-top: 100px;
`;
