import styled from "styled-components";

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1170px;
  background: var(--FarmSystem_LightGrey);
  border-radius: 10px;
  padding: ${({ $isMobile }) => ($isMobile ? "30px 20px" : "50px 60px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TrackNameContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const TrackName = styled.h2<{ $isMobile: boolean }>`
  width: 338px;
  color: var(--FarmSystem_Green07, #175321);
  font-size: ${({ $isMobile }) => ($isMobile ? "22px" : "32px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
`;

export const TrackDescription = styled.p<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1040px;
  height: 100%;
  margin-bottom: 30px;
  text-align: left;
  color: var(--FarmSystem_Black, #191919);
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "19px")};
  font-style: normal;
  font-weight: 300;
  line-height: ${({ $isMobile }) => ($isMobile ? "25px" : "35px")}; /* 150% */
`;

export const PhasesContainer = styled.div<{ $isApp: boolean, $isMobile: boolean }>`
  width: ${({ $isApp }) => ($isApp ? "100%" : "100%")};
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 51px;
  flex-wrap: wrap;
`;

export const PhaseCard = styled.div<{ $isApp: boolean, $isMobile: boolean, $isDesktop: boolean }>`
  display: flex;
  width: ${({ $isDesktop, $isMobile, $isApp }) => ($isDesktop ? "300px" : $isMobile ? ($isApp ? "85%" :"70%") : "70%")};
  min-height: ${({ $isApp }) => ($isApp ? "200px" : "auto")};
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  border-radius: 20px;
  background: var(--FarmSystem_White, #FCFCFC);
`;

export const PhaseTitle = styled.h3<{ $isMobile: boolean }>`
  color: var(--FarmSystem_Green07, #175321);
  text-align: center;
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "0px" : "11px")};
  font-style: normal;
`;

export const PhaseContentInner = styled.ul<{ $isMobile: boolean }>`
  display: inline-block; 
  flex-direction: column;
  justify-content: left;
  align-items: left;
  /* background-color: orange; */
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

export const PhaseContent = styled.ul<{ $isMobile: boolean }>`
  display: flex;
  width: 100%;
  min-height: ${({ $isMobile }) => ($isMobile ? "130px" : "200px")};
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: left;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "18px")};
  color: var(--FarmSystem_Black, #191919);
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  /* padding-left: 20px; */
  /* background-color: pink; */
`;

export const Li = styled.li<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  color: var(--FarmSystem_Black, #191919);
`;

export const ProfessorNameContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "10px" : "15px")};
`;

export const ProfessorText = styled.p < { $isMobile: boolean}>`
  color: var(--FarmSystem_Green07, #175321);
  font-size: ${({ $isMobile }) => ($isMobile ? "20px" : "24px")};
  font-weight: 700;
  margin: ${({ $isMobile }) => ($isMobile ? "10px" : "0px")};
  text-align: left;
`;

/** 교수 정보 전체 레이아웃 (좌: 사진/이름/연락처, 우: 최종학력 등) */
export const ProfessorProfile = styled.div<{ $isDesktop: boolean; $isMobile: boolean  }>`
  display: flex;
  flex-direction: ${({ $isDesktop }) => ($isDesktop ? "row" : "column")};

  /* 오른쪽 정보가 너무 오른쪽으로 치우치지 않도록 flex-start */
  justify-content: flex-start;

  /* 데스크탑에서는 gap을 넉넉히 주어 좌우 공간 확보 */
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "10px")};
  align-items: flex-start;
  width: 100%;
`;

/** 왼쪽 섹션 (교수 사진/이름/연락처) */
export const ProfessorProfileContent = styled.div<{ $isDesktop: boolean }>`
  display: flex;
  flex-direction: column;

  /* 예: 데스크탑에서 60% */
  width: ${({ $isDesktop }) => ($isDesktop ? "50%" : "100%")};
`;

/** 사진 + 이름을 가로/세로 배치하는 컨테이너 */
export const PhotoNameRow = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  align-items: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  margin-bottom: 15px;
`;

export const ProfessorImage = styled.img<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "90px" : "120px")};
  height: ${({ $isMobile }) => ($isMobile ? "100px" : "140px")};
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const ProfessorName = styled.p<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "22px")};
  font-weight: 700;
  color: #404040;
  margin-top: 10px;
  text-align: ${({ $isMobile }) => ($isMobile ? "center" : "left")};
`;

export const ContactList = styled.ul<{ $isMobile: boolean }>`
  list-style: none;
  padding: 0;
  margin: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  gap: ${({ $isMobile }) => ($isMobile ? "6px" : "8px")};

  /* ProfessorName의 스타일 상속을 방지하기 위해 명시적으로 재설정 */
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  font-weight: normal;
  color: #635c55;
`;

export const ContactItem = styled.li<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  color: #635c55;
  display: flex;
  align-items: center;
  gap: 6px;
`;

/** 홈페이지 버튼 (필요 시 사용) */
export const HomepageButton = styled.a<{ $isMobile: boolean }>`
  width: fit-content;
  background-color: #fcfcfc;
  color: #404040;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "14px")};
  font-weight: 600;
  padding: ${({ $isMobile }) => ($isMobile ? "4px 12px" : "6px 16px")};
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const ProfessorContent = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  margin-top: ${({ $isMobile }) => ($isMobile ? "0" : "20px")};
`;

export const ProfileContainer = styled.div<{
  $isDesktop: boolean;
  $isMobile: boolean;
  $isTablet: boolean;
}>`
  width: ${({ $isDesktop }) => ($isDesktop ? "50%" : "100%")};
  /* height: 300px; */
  display: grid;
  grid-template-columns: ${({ $isDesktop, $isTablet, $isMobile }) =>
    $isDesktop ? "120px 1fr" : $isTablet ? "100px 1fr" : $isMobile ? "50px 1fr" : "50px 1fr"};  gap: ${({ $isDesktop }) => ($isDesktop ? "12px" : "8px")};
  background-color: #fafafa;
  padding: ${({ $isDesktop }) => ($isDesktop ? "30px" : "10px")};
  border-radius: 8px;
  margin-right: 40px;
`;

export const ProfileLabel = styled.div<{ $isMobile: boolean}>`
  font-weight: 600;
  color: #404040;
  text-align: left;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};


`;

export const ProfileValue = styled.div<{ $isMobile: boolean}>`
  font-weight: 400;
  color: #635c55;
  line-height: 1.4;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};

`;
