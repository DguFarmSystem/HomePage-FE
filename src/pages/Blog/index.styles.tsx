import styled from 'styled-components';

//전체 컨테이너
export const Container = styled.div`
  position: relative; /*위치 지정에 필요*/
  width: 100vw;
  height: 100vh;

  display: flex;
  margin: 0 auto; //중앙정렬
  padding: 0 10%; //좌우 여백
`;

//모양 유지 컨테이너
export const ActiveTabIndicator = styled.div<{$isTablet: boolean;}>`
  margin-top: ${(props)=> (props.$isTablet ? "18vh": "20vh" )}; /* 반응형 추가 */
  width: 100%;
  display: flex;
`;

// 버튼 컨테이너 스타일
//  top: 70px;
//  left: 10%;
export const ButtonContainer = styled.div`
  width: 300px;
  height: 100px;

  margin: 10vh 0;
  position: absolute;

  display: flex;
  gap: 5px;
`;


// 토글 버튼 스타일
export const ToggleButton = styled.button<{ active: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${(props) => (props.active ? '40px' : '32px')};
  font-weight: 600;
  color: ${(props) => (props.active ? 'var(--FarmSystem_Green01)' : 'var(--FarmSystem_DarkGrey)')};
`;

export const Divider = styled.div`
    padding: none;
    margin: 0 5px;
    font-size: 64px;
    font-weight: 100;
    color: var(--FarmSystem_DarkGrey);
`;