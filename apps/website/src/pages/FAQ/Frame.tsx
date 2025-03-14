import React, { useState } from 'react';
import * as S from './Frame.styled';
import useMediaQueries from '@/hooks/useMediaQueries';

interface FrameProps {
  onSelectCategory: (category: string) => void;
}

const Frame: React.FC<FrameProps> = ({ onSelectCategory }) => {
  const { isMobile, isTablet, isApp } = useMediaQueries();
  const [selectedCategory, setSelectedCategory] = useState('공통');
  const categories = ['공통', '게임/영상', '보안/웹', '인공지능', '사물인터넷/로봇', '빅데이터'];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <S.FrameParent $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet}>
      {categories.map((category) => (
        <S.Container 
          key={category}
          onClick={() => handleCategoryClick(category)}
          isSelected={selectedCategory === category}
          $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet}
        >
          {category}
        </S.Container>
      ))}
    </S.FrameParent>
  );
};

export default Frame;