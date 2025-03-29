import { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './index.styles';
import useMediaQueries from '@/hooks/useMediaQueries';
import BackArrow from '../../assets/Icons/BackArrow.png';
import FarmLogo from '../../assets/Icons/FarmSystem_Logo.png';
import Crown from '../../assets/Icons/crown.png';
import Sign from '@/components/Ranking/sign';
import CheerBalloon from './components/CheerBalloon';
import { useUserRankingQuery } from '@/services/query/useUserRankingQuery';
import { convertTrackToString } from '@/utils/convertTrackToString';

const headerTexts = [
  '랭킹은 씨앗을 기준으로 0시간마다 정렬돼요.',
  '씨앗은 트랙별 우수활동자 심사에 반영돼요.',
  '친구의 프로필을 눌러 응원할 수 있어요!'
];

export default function Main() {
  const { data, isLoading } = useUserRankingQuery();
  const { isMobile, isApp } = useMediaQueries();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [balloonPosition, setBalloonPosition] = useState<{ x: number; y: number } | null>(null);
  const balloonRef = useRef<HTMLDivElement>(null);

  const getBgColor = (rank: number) => {
    if (rank === 1) return '#5CD282';
    if (rank === 2) return '#7CDA9A';
    if (rank === 3) return '#ABE6BF';
    return '#D8D8D8';
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.ranking-item') && !target.closest('.cheer-balloon')) {
        setSelectedIndex(null);
        setBalloonPosition(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isLoading || !data) return null;

  // 내 랭킹을 맨 위에, 그 외는 userRankList
  const rankingData = [data.myRank, ...data.userRankList];

  return (
    <S.MyPageContainer>
      <S.ProfileWrapper isMobile={isMobile}>
        <S.TitleBox isMobile={isMobile}>
          <S.BackArrow src={BackArrow} />
          <S.Title>랭킹</S.Title>
        </S.TitleBox>
        <Sign isApp={isApp} isMobile={isMobile} texts={headerTexts} />

        <S.RankingTitle isApp={isApp}>
          <S.RankingTitleText isApp={isApp}>순위</S.RankingTitleText>
          <S.RankingTitleText isApp={isApp}>이름/전공</S.RankingTitleText>
          <S.RankingTitleText isApp={isApp}>누적 씨앗 개수</S.RankingTitleText>
        </S.RankingTitle>

        <S.RankingList>
          {rankingData.map((item, index) => (
            <S.RankingItem
              key={item.userId}
              className="ranking-item"
              bgColor={getBgColor(item.rank)}
              isMe={index === 0} // 내 랭킹은 항상 맨 위!!!!
              isApp={isApp}
              onClick={(e) => {
                setSelectedIndex(index);
                setBalloonPosition({
                  x: e.pageX - 105,
                  y: e.pageY - 115,
                });
              }}
            >
              <S.RankBox>
                <S.RankNumber isApp={isApp}>{item.rank}</S.RankNumber>
                {item.rank <= 3 && <S.CrownIcon src={Crown} alt="crown" />}
              </S.RankBox>

              <S.ProfileSection>
                <S.ProfileIcon src={item.profileImageUrl || FarmLogo} />
                <S.ColumnBox>
                  <S.Name isApp={isApp}>{item.name}</S.Name>
                  <S.Track isApp={isApp}>{item.generation}기 {convertTrackToString(item.track)}</S.Track>
                </S.ColumnBox>
              </S.ProfileSection>

              <S.Score isApp={isApp}>{item.totalSeed}</S.Score>
            </S.RankingItem>
          ))}
        </S.RankingList>

        <AnimatePresence>
          {selectedIndex !== null && balloonPosition && (
            <CheerBalloon
              ref={balloonRef}
              isApp={isApp}
              x={balloonPosition.x}
              y={balloonPosition.y}
              onClose={() => setSelectedIndex(null)}
              onCheerClick={() => {
                console.log('응원하기 클릭');
                setSelectedIndex(null);
              }}
              onProfileClick={() => {
                console.log('프로필 보기 클릭');
                setSelectedIndex(null);
              }}
            />
          )}
        </AnimatePresence>
      </S.ProfileWrapper>
    </S.MyPageContainer>
  );
}