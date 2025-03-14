import { useState } from 'react';
import * as S from './Tracks.styled';
import { TracksData } from './TracksData';
import InfoBox from './InfoBox';
import OrangeArrow from '@/assets/Icons/OrangeArrow.svg';
import useMediaQueries from "@/hooks/useMediaQueries";

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(TracksData[0]);
  const { isApp, isMobile, isTablet } = useMediaQueries();


  const handleSmoothScroll = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const offset = 80;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.Container id="tracks" $isMobile={isMobile} $isTablet={isTablet}>
      <S.CenterContainer $isApp={isApp} $isMobile={isMobile}>
        <S.Title $isMobile={isMobile}>트랙 및 커리큘럼</S.Title>
        <S.GoToUnion onClick={(e) => handleSmoothScroll(e, "#union")} $isMobile={isMobile}>
          <S.GoToUnionText $isMobile={isMobile}>
            트랙 선택이 고민된다면 <S.OrangeHighlight>Union</S.OrangeHighlight>으로!
          </S.GoToUnionText>
          <S.IconDiv $isMobile={isMobile}>
            <img src={OrangeArrow} alt="Go to Union" />
          </S.IconDiv>
        </S.GoToUnion>
        {isApp ? (
          <S.ButtonContainerMobile>
            {TracksData.map((track, index) => (
              <S.TrackButtonMobile
                key={index}
                $isSelected={selectedTrack.name === track.name}
                onClick={() => setSelectedTrack(track)}
              >
                {track.name}
              </S.TrackButtonMobile>
            ))}
          </S.ButtonContainerMobile>
        ) : (
          <S.ButtonContainer $isMobile={isMobile}>
            {TracksData.map((track, index) => (
              <S.TrackButton
                key={index}
                $isSelected={selectedTrack.name === track.name}
                onClick={() => setSelectedTrack(track)}
                $isMobile={isMobile}
              >
                <S.TrackButtonText $isMobile={isMobile}>{track.name}</S.TrackButtonText>
              </S.TrackButton>
            ))}
          </S.ButtonContainer>
        )}

        <InfoBox selectedTrack={selectedTrack}/>
      </S.CenterContainer>
    </S.Container>
  );
}
