import styled from "styled-components";

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isMobile ? "370px" : "500px")};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: ${(props) => (props.$isMobile ? "20px 0" : "0")};
  /* background-color: yellow; */
`;

// 테두리에 Gradient가 안돼서 박스 두개를 겹쳐서 테두리 Gradient를 만들었습니다.
export const ContentBoxBorder = styled.div<{ $isMobile: boolean }>`
  position: ${(props) => (props.$isMobile ? "relative" : "absolute")};
  top: 0;
  width: ${(props) => (props.$isMobile ? "90%" : "700px")};
  height: ${(props) => (props.$isMobile ? "auto" : "500px")};

  background: linear-gradient(
    90deg,
    var(--FarmSystem_Orange) 0%,
    var(--FarmSystem_Green02) 100%
  );
  padding: 5px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin: 0 auto;  
`;

export const Content = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  min-height: 300px;
  height: 100%;

  background-color: var(--FarmSystem_White);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${(props) => (props.$isMobile ? "0 5px" : "0")};
`;

export const ContentInfoTextBox = styled.div<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? "90%" : "600px")};
  height: ${(props) => (props.$isMobile ? "auto" : "210px")};

  color: var(--FarmSystem_Black);
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$isMobile ? "16px" : "24px")};
  line-height: ${(props) => (props.$isMobile ? "28px" : "35px")};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: ${(props) => (props.$isMobile ? "start" : "center")};

  margin-bottom:  ${(props) => (props.$isMobile ? "13px" : "35px")};
  padding-top: ${(props) => (props.$isMobile ? "20px" : "0")};
  padding-bottom: ${(props) => (props.$isMobile ? "20px" : "0")};

  
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const HighlightOrange = styled.span<{ $isMobile: boolean }>`
  font-weight: 700;
  color: var(--FarmSystem_Orange);
  margin-left: ${(props) => (props.$isMobile ? "10px" : "0")};
`;

export const ActivityTitle = styled.h3<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? "100%" : "149px")};
  height: ${(props) => (props.$isMobile ? "auto" : "38px")};

  font-weight: 700;
  font-size: ${(props) => (props.$isMobile ? "22px" : "24px")};
  line-height: ${(props) => (props.$isMobile ? "30px" : "35px")};
  color: var(--FarmSystem_Green01);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-bottom: ${(props) => (props.$isMobile ? "7px" : "17px")};
`;

export const ActivityList = styled.ul<{ $isMobile: boolean; $isTiny: boolean; }>`
  width: ${(props) => (props.$isMobile ? "90%" : "577px")};
  height: ${(props) => (props.$isMobile ? "auto" : "80px")};

  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center; 
  justify-content: center; 
  align-content: center; 

  gap: ${(props) => (props.$isMobile ? "0 10px" : "10px 20px")};
  list-style-type: disc;
`;

export const ListBox = styled.div<{ $isApp: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isApp ? "center" : "start")};
  justify-content: center;
  padding-bottom: ${(props) => (props.$isApp ? "15px" : "0px")};
  /* background-color: orange; */
`

export const Li = styled.li<{
  $isApp: boolean;
  $isMobile: boolean;
  $isTiny?: boolean;
}>`
  height: ${(props) => (props.$isApp ? "25px" : "35px")};

  font-style: normal;
  font-weight: 300;
  font-size: ${(props) =>
    props.$isMobile ? "15px" : "20px"};
  line-height: ${(props) => (props.$isMobile ? "30px" : "35px")};
  color: var(--FarmSystem_Black);

  list-style-type: disc;
  list-style-position: ${(props) =>
    props.$isMobile && props.$isTiny ? "none" : "outside"};
  margin-left: ${(props) =>
    props.$isMobile
      ? "15px"
      : "40px"};
  text-align: center;
`;


export const GradientContainer = styled.div<{ $isMobile: boolean, $isTablet: boolean }>`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ✅ 블러 크기 조정 */
  height: ${(props) => (props.$isMobile ? "370px" : props.$isTablet ? "500px" : "500px")};
  gap: ${(props) => (props.$isMobile ? "30vw" : props.$isTablet ? "200px" : "80px")};
  /* background-color: orange; */
`;

export const GradientLeft = styled.div<{ $isMobile: boolean, $isTablet: boolean }>`
  width: ${(props) => (props.$isMobile ? "280px" : props.$isTablet ? "400px" : "550px")};
  height: ${(props) => (props.$isMobile ? "33vh" : props.$isTablet ? "400px" : "400px")};

  background: linear-gradient(
    270deg,
    var(--FarmSystem_Orange) 50%,
    var(--FarmSystem_White) 100%
  );
  opacity: 0.4;
  border-radius: 20px;
`;

export const GradientRight = styled.div<{ $isMobile: boolean, $isTablet: boolean }>`
  width: ${(props) => (props.$isMobile ? "280px" : props.$isTablet ? "400px" : "550px")};
  height: ${(props) => (props.$isMobile ? "33vh" : props.$isTablet ? "400px" : "400px")};

  background: linear-gradient(
    90deg,
    var(--FarmSystem_Green02) 50%,
    var(--FarmSystem_White) 100%
  );
  opacity: 0.4;
  border-radius: 20px;
`;