import { useState } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import { useNavigate } from 'react-router';
import * as S from './cheer.styled';

import { useUserStore } from '@repo/auth/stores/userStore';
import { useCheerMutation } from '@/services/mutation/useCheerMutation';

import GoBackImage from '@/assets/Icons/corner-up-left.png';

/** 카테고리-태그 매핑!!!!!! ENUM 값 확인 필요!!!! */
const tagMap = {
  '칭찬해요!': 'PRAISE',
  '감사해요!': 'THANK',
  '응원해요!': 'SUPPORT',
} as const;

type CategoryName = keyof typeof tagMap;

/** 카테고리 목록 */
const categories = [
  { name: '칭찬해요!', bgColor: '#FFF9A5', fontColor: '#A49900' },
  { name: '감사해요!', bgColor: '#8FB7F2', fontColor: '#1D5AB2' },
  { name: '응원해요!', bgColor: '#FFC0CB', fontColor: '#E5435F' },
] as const;

interface CheerMessageEditorProps {
  searchedUser: {
    name: string;
    userId: number;
  };
}

export default function CheerMessageEditor({ searchedUser }: CheerMessageEditorProps) {
  const [contentInput, setContentInput] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const { userId: cheeredId } = searchedUser;


  const [selectedCategory, setSelectedCategory] = useState<{
    name: CategoryName;
    bgColor?: string;
    fontColor?: string;
  } | null>(null);

  const isButtonDisabled = contentCount < 100;

  const navigate = useNavigate();
  const { isApp, isMobile, isTablet, isDesktop } = useMediaQueries();
  const { user } = useUserStore((s) => s); // 로그인한 유저 정보
  const { mutate: sendCheer } = useCheerMutation(); // 응원 API

  // 카테고리 선택
  const handleCategoryClick = (cat: { name: CategoryName; bgColor: string; fontColor?: string }) => {
    setSelectedCategory(cat);
  };

  // 입력값 변경
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(e.target.value);
    setContentCount(e.target.value.length);
  };

  // 응원 메시지 전송
   const handleSubmit = () => {
    if (!user?.userId || !selectedCategory || isButtonDisabled) return;

    sendCheer({
      cheererId: user.userId,
      cheeredId, 
      tag: tagMap[selectedCategory.name],
      content: contentInput,
    });

    navigate('/cheer');
  };

  return (
    <S.CheerContainer $isApp={isApp} $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
      {/* 헤더 */}
      <S.CheerContainerHeader $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop}>
        <S.GoBackButton $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop} onClick={() => navigate('/cheer')}>
          <img src={GoBackImage} alt="뒤로가기" />
        </S.GoBackButton>
        <S.CheerContainerTitle $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop}>
          응원하기
        </S.CheerContainerTitle>
      </S.CheerContainerHeader>

      {/* 타이틀 */}
      <S.HeaderText $isApp={isApp} $isMobile={isMobile}>
        {searchedUser.name} 님에게
      </S.HeaderText>
      <S.MainTitle>응원 메시지를 남겨볼까요?</S.MainTitle>

      {/* 카드 영역 */}
      <S.CheerCard $isApp={isApp} $isMobile={isMobile} $isDesktop={isDesktop}>
        <S.ContentWrapper $isApp={isApp} $isMobile={isMobile}>
          <a>To. {searchedUser.name}</a>

          {/* 카테고리 선택 */}
          <S.CategoryContainer>
            {categories.map((cat) => (
              <S.CategoryItem
                key={cat.name}
                $isApp={isApp}
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
                onClick={() => handleCategoryClick(cat)}
                $isSelected={selectedCategory?.name === cat.name}
                $fontColor={cat.fontColor}
                $bgColor={cat.bgColor}
              >
                {cat.name}
              </S.CategoryItem>
            ))}
          </S.CategoryContainer>

          {/* 메시지 작성 */}
          <S.InputArea $isApp={isApp}>
            <S.InputHeader>
              <S.InputTitleContainer>
                <S.SmallText $isApp={isApp}>{contentCount}/180자</S.SmallText>
              </S.InputTitleContainer>
              <S.SmallText $isApp={isApp}>* 100자 이상 작성</S.SmallText>
            </S.InputHeader>

            <S.MessageTextarea
              $bgColor={selectedCategory?.bgColor}
              value={contentInput}
              onChange={handleContentChange}
              placeholder="여기에 응원 메시지를 작성해주세요!"
              maxLength={180}
            />
          </S.InputArea>

          {/* 전송 버튼 */}
          <S.SubmitButton disabled={isButtonDisabled} $disabled={isButtonDisabled} onClick={handleSubmit}>
            응원하기
          </S.SubmitButton>
        </S.ContentWrapper>
      </S.CheerCard>
    </S.CheerContainer>
  );
}
