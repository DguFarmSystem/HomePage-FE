import * as S from './NewsItem.styled';
import { newsData } from '@/models/news';
import PlaceHolder from '@/assets/Images/news/PlaceHolder.png';
import Logger from '@/utils/Logger';
import { useNavigate } from 'react-router';
import useMediaQueries from '@/hooks/useMediaQueries';

const dummyTags = ['태그1'];

export default function NewsItem({ newsData }: { newsData?: newsData }) {
  const navigate = useNavigate();
  const isMobile = useMediaQueries().isMobile;

  if (!newsData) {
    return null;
  }

  Logger.log(newsData);
  const { title = "", content = "" } = newsData;
  
  // 아직 썸네일과 태그 정보가 없으므로 placeholder와 dummyTags 사용
  const thumbnailSrc = PlaceHolder;
  const tags = dummyTags;

  const maxLength = 200;
  const truncatedContent = content.length > maxLength 
    ? content.slice(0, maxLength) + '...'
    : content;

  return (
    <S.NewsItem 
      $isMobile={isMobile}
      onClick={() => navigate(`/news/${newsData.newsId}`)}
    >
      <S.Thumbnail src={thumbnailSrc} alt={title} $isMobile={isMobile} />
      <S.NewsContent $isMobile={isMobile}>
        <S.Title $isMobile={isMobile}>{title}</S.Title>
        <S.Content $isMobile={isMobile}>{truncatedContent}</S.Content>
        <S.TagBox $isMobile={isMobile}>
          {tags.map((tag, index) => (
            <S.Tag key={index} $isMobile={isMobile}>{tag}</S.Tag>
          ))}
        </S.TagBox>
      </S.NewsContent>
    </S.NewsItem>
  );
}