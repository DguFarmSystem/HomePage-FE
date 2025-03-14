import { useEffect } from "react";
import { useParams } from "react-router";
import { useNewsDetail } from "@/hooks/useNews";
import Logger from "@/utils/Logger";
import * as S from "./index.styled";
import GoBackArrow from "@/assets/LeftArrow.png";
// import { newsData } from '@/models/news';
// import PlaceHolder from '@/assets/Images/news/PlaceHolder.png';

export default function NewsDetail() {
  const { newsId } = useParams<{ newsId: string }>();
  const { data: newsData, loading: newsLoading, error: newsError } = useNewsDetail(Number(newsId));

  useEffect(() => {
    if (!newsId) return ;
  }, [newsId]);

  if (newsLoading) {
    return (
      <S.Container>
        Loading...
      </S.Container>
    );
  }

  if (newsError) {
    Logger.error(newsError);
    return (
      <S.Container>
        뉴스를 불러오는 중 오류가 발생했습니다.
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.NewsPageTitle>소식</S.NewsPageTitle>
      <S.NewsDetailCard>
        <S.GoBackContainer>
          <S.GoBackButton onClick={() => window.history.back()}>
            <S.GoBackImg src={GoBackArrow} alt="Go back" />
            <p>돌아가기</p>
          </S.GoBackButton>
        </S.GoBackContainer>
        <S.TitleContainer>
          <S.DateAndTagContainer>
            <S.Date>{/*newsData?.date*/ "(임시)게시일자:  2025년 03월 13일"}</S.Date>
            <S.Tag>{/*newsData?.tag*/ "(임시) 홍보용"}</S.Tag>
          </S.DateAndTagContainer>
          <S.Title>{newsData?.title}</S.Title>
        </S.TitleContainer>
        <p>{newsData?.content}</p>
      </S.NewsDetailCard>
    </S.Container>
  );
}