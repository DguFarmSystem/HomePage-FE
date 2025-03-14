import styled from "styled-components";

export const Container = styled.section<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${(props) => (props.$isMobile ? "1000px" : "1500px")};
  user-select: none;
  padding: ${(props) => (props.$isMobile ? "5px" : "0")};
`;

export const IntroduceText = styled.p<{ $isApp: boolean; $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? "100%" : "500px")};
  height: ${(props) => (props.$isMobile ? "auto" : "86px")};

  text-align: center;
  color: var(--FarmSystem_Black);
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$isApp ? "20px" : props.$isMobile ? "24px" : "36px")};
  line-height: ${(props) => (props.$isMobile ? "32px" : "43px")};

  margin-bottom: ${(props) => (props.$isApp ? "30px" : props.$isMobile ? "50px" : "70px")};
`;

export const UnionTextContainer = styled.div<{ $isMobile: boolean; $isApp: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isMobile ? "1fr 2fr 1fr" : "1fr 1fr 1fr 1fr"};
  justify-items: center;
  align-items: start;
  width: ${(props) => (props.$isMobile ? "250px" : "300px")};
  margin-bottom: ${(props) =>
    props.$isApp ? "30px" : props.$isMobile ? "0px" : "50px"};
`;


export const UnionText = styled.h2<{ $isMobile: boolean }>`
  grid-column: 2 / 4;
  text-align: center;
  color: var(--FarmSystem_Orange);
  font-size: ${(props) => (props.$isMobile ? "40px" : "48px")};
  font-weight: 700;
`;

export const NewBadge = styled.div<{ $isMobile: boolean }>`
  grid-column: 4 / 5;
  width: ${(props) => (props.$isMobile ? "60px" : "70px")};
  height: ${(props) => (props.$isMobile ? "22px" : "25px")};
  background: var(--FarmSystem_Green02);
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$isMobile ? "14px" : "16px")};
  line-height: 19px;
  color: var(--FarmSystem_White);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
`;
