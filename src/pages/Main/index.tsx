import Intro from "./Intro/Intro";
import Tracks from "./Tracks/Tracks";
import Union from "./Union/Union";
import Achievements from "./Achievements/Achievements";
import BottomInfo from "./BottomInfo/BottomInfo";
import FarmIntroduce from "./FarmIntroduce/FarmIntroduce";

import * as S from "./index.styled";
import useMediaQueries from "@/hooks/useMediaQueries";

export default function Main() {
  const { isMobile } = useMediaQueries();
  return (
      <S.MainContainer $isMobile={isMobile} > {/* 배경 그라데이션 적용 */}
      <Intro />
      <FarmIntroduce />
      <Tracks />
      <Union />
      <Achievements />
      <BottomInfo />
      </S.MainContainer>
  );
}
