import useMediaQueries from '@/hooks/useMediaQueries';
import { useNewsList } from '@/hooks/useNews';
// import Logger from '@/utils/Logger';
import * as S from './index.styled';
import NewsItem from './NewsItem';


export default function News() {
  const { isMobile } = useMediaQueries();
  const { data: newsData, loading: newsLoading, error: newsError } = useNewsList();
  
  if (newsLoading) {
    return (
      <S.Container>
        <S.Message $isMobile={isMobile}>Loading...</S.Message>
      </S.Container>
    );
  }

  if (newsError) {
    return (
      <S.Container>
        <S.DescriptionContainer>
          <S.Message $isMobile={isMobile}>아직 등록된 소식이 없어요.</S.Message>
          <S.MiniMessage $isMobile={isMobile}>곧 FarmSystem의 다양한 소식을 알려드릴게요!</S.MiniMessage>
        </S.DescriptionContainer>
      </S.Container>
    );
    // Logger.error(newsError);
    // return (
    //   <S.Container>
    //     <S.Message $isMobile={isMobile}>뉴스를 불러오는 중 오류가 발생했습니다.</S.Message>
    //   </S.Container>
    // );
  }

  return (
    <S.Container>
      <S.NewsPageTitle>소식</S.NewsPageTitle>
      {newsData && newsData.length > 0 ? (
        <S.NewsContainer>
          {newsData.map((news, index) => (
            <NewsItem key={index} newsData={news} />
          ))}
        </S.NewsContainer>
      ) : (
        <S.DescriptionContainer>
          <S.Message $isMobile={isMobile}>아직 등록된 소식이 없어요.</S.Message>
          <S.MiniMessage $isMobile={isMobile}>곧 FarmSystem의 다양한 소식을 알려드릴게요!</S.MiniMessage>
        </S.DescriptionContainer>
      )}
    </S.Container>
  );
}