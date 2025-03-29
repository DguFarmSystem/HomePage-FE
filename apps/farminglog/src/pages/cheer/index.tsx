import * as S from './index.styled';
import { useNavigate } from 'react-router';
import useMediaQueries from '@/hooks/useMediaQueries';
import CheerCard from './CheerCard';
import GoBackImage from '@/assets/Icons/corner-up-left.png';
import Thumb from '@/assets/home/thumbs-up.png';
import { useCheerListQuery } from '@/services/query/useCheerListQuery';
import { convertTagToCategory } from '@/utils/convertTagToCategory';

export interface CheerData {
  id: number;
  r_profile: string;
  receiver: string;
  category: string;
  content: string;
  s_profile: string;
  sender: string;
  bgColor: string;
  fontColor: string;
}


export default function Cheer() {
const { data: cheerList = [] } = useCheerListQuery();

  const navigate = useNavigate();
  const { isApp, isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.CheerContainer
      $isApp={isApp}
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      {/* 헤더 */}
      <S.CheerContainerHeader
        $isApp={isApp}
        $isMobile={isMobile}
        $isDesktop={isDesktop}
      >
        <S.GoBackButton
          $isApp={isApp}
          $isMobile={isMobile}
          $isDesktop={isDesktop}
        >
          <img src={GoBackImage} alt="뒤로가기" />
        </S.GoBackButton>
        <S.CheerContainerTitle
          $isApp={isApp}
          $isMobile={isMobile}
          $isDesktop={isDesktop}
        >
          응원하기
        </S.CheerContainerTitle>
      </S.CheerContainerHeader>

      {/* 본문 */}
      <S.CheerCardContainer
        $isApp={isApp}
        $isMobile={isMobile}
        $isDesktop={isDesktop}
      >
         {cheerList.map((item) => {
      const categoryData = convertTagToCategory(item.tag);

          return (
            <CheerCard
              key={item.cheerId}
              cheer={{
                id: item.cheerId,
                r_profile: item.cheered.profileImageUrl,
                receiver: item.cheered.name,
                category: categoryData.name,
                content: item.content,
                s_profile: item.cheerer.profileImageUrl,
                sender: item.cheerer.name,
                bgColor: categoryData.bgColor,
                fontColor: categoryData.fontColor,
              }}
            />
          );
        })}
      </S.CheerCardContainer>

      {/* 글쓰기 버튼 */}
      <S.CheerWriteButton
        $isApp={isApp}
        $isMobile={isMobile}
        $isDesktop={isDesktop}
        onClick={() => navigate('/cheer/write')}
      >
        <S.CheerWriteButtonImage
          $isApp={isApp}
          $isMobile={isMobile}
          $isDesktop={isDesktop}
          src={Thumb}
          alt="글쓰기"
        />
      </S.CheerWriteButton>
    </S.CheerContainer>
  );
}
