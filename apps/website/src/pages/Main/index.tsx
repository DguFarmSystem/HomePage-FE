import Intro from "./Intro/Intro";
import Tracks from "./Tracks/Tracks";
import Union from "./Union/Union";
import Achievements from "./Achievements/Achievements";
import BottomInfo from "./BottomInfo/BottomInfo";
import FarmIntroduce from "./FarmIntroduce/FarmIntroduce";

import * as S from "./index.styled";
import useMediaQueries from "@/hooks/useMediaQueries";

export default function Main() {
  const { isApp, isMobile } = useMediaQueries();
  return (
      <S.MainContainer $isApp={isApp} $isMobile={isMobile} > 
      <Intro />
      <FarmIntroduce />
      <Tracks />
      <Union />
      <Achievements />
      <BottomInfo />
      </S.MainContainer>
  );
}
