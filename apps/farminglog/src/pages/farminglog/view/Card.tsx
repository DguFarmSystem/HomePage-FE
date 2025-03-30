import * as S from './Card.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useMediaQueries from '@/hooks/useMediaQueries';
import { FarmingLog } from '@/models/farminglog';
import { useToggleLikeMutation } from '@/services/mutation/FarmingLog';
import useFarmingLogStore from '@/stores/farminglogStore';

import Heart from '@/assets/Icons/heart.png';
import HeartFill from '@/assets/Icons/heart-fill.png';
import ChecvronRight from '@/assets/Icons/chevron-right.png';
import Edit3 from '@/assets/Icons/edit-3.png';

interface CardProps {
  data: FarmingLog;
}

export default function Card({ data }: CardProps) {
  const [content, setContent] = useState('');
  const [viewDetail, setViewDetail] = useState(false);
  const [showDetailButton, setShowDetailButton] = useState(false);
  const [liked, setLiked] = useState(data.isLiked);
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const { isApp, isMobile, isDesktop } = useMediaQueries();
  const { mutate: toggleLikeMutate } = useToggleLikeMutation();
  const {
    setIsEditMode,
    setFarmingLogId,
    setFarminglogTitle,
    setFarminglogContent,
    setFarminglogCategory,
  } = useFarmingLogStore();

  const handleLikeClick = () => {
    setLiked(prev => !prev);
    setClicked(true);
    toggleLikeMutate(data.farmingLogId);

    if (liked) {
      setLikeCount(prev => prev - 1);
    } else { 
      setLikeCount(prev => prev + 1);
    }
    setTimeout(() => setClicked(false), 300);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
    setFarmingLogId(data.farmingLogId);
    setFarminglogTitle(data.title);
    setFarminglogContent(data.content);
    setFarminglogCategory(data.category);
    navigate('/farminglog/create');
  };

  useEffect(() => {
    if (data.content.length > 150) {
      setShowDetailButton(true);
      if (viewDetail) setContent(data.content);
      else setContent(data.content.slice(0, 150) + '...');
    } else {
      setContent(data.content);
      setShowDetailButton(false);
    }
  }
  , [data.content, viewDetail]);

  return (
    <S.FarmingLogCard $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop}>
      {/** 
        *  우선 이미지 없이 진행
        * <S.Thumbnail src={data.thumbnail} alt="썸네일" />
        */}
      <S.ContentContainer>
        <S.CategoryContainer>
          <S.Category $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop}>
            {data.category}
          </S.Category>
          {data.isOwner && (
            <S.EditButton onClick={handleEditClick}>
              <img src={Edit3} alt="수정" />
            </S.EditButton>
          )}
        </S.CategoryContainer>
        <S.TitleContainer>
          <S.Title>{data.title}</S.Title>
          <S.LikeContainer onClick={handleLikeClick}>
          <S.LikeImage
            src={liked ? HeartFill : Heart}
            
            clicked={!!clicked}
            alt="좋아요"
          />
          <S.LikeCount>{likeCount}</S.LikeCount>
          </S.LikeContainer>
        </S.TitleContainer>
        <S.InfoContainer>
          <S.CreatedAt>{data.createdAt}</S.CreatedAt>
          <S.Author>{data.author} | {data.track}</S.Author>
        </S.InfoContainer>
        <S.Content>{content}</S.Content>
      </S.ContentContainer>
      {showDetailButton && (
        <S.DetailContainer>
          <S.DetailButton onClick={() => setViewDetail(!viewDetail)}>
            <S.DetailButtonText>{viewDetail ? '간략히' : '자세히'}</S.DetailButtonText>
            <S.DetailButtonImage src={ChecvronRight} alt="더보기" />
          </S.DetailButton>
        </S.DetailContainer>
      )}
    </S.FarmingLogCard>
  );
}