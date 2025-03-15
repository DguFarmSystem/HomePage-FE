import * as S from './NewsItemSkeleton.style';
import useMediaQueries from '@/hooks/useMediaQueries';

type MultiSkeletonProps = {
  count?: number;
  $isMobile?: boolean;
};

/**
 * 여러 줄 스켈레톤을 반복해서 찍어주는 유틸 컴포넌트
 * - 여기서는 <SkeletonText>만 반복 
 */
function MultiSkeleton({ count = 2, $isMobile }: MultiSkeletonProps) {
  const lines = Array.from({ length: count }, (_, idx) => (
    <S.SkeletonText key={idx} $isMobile={$isMobile} />
  ));
  return <>{lines}</>;
}

/**
 * 실제 스켈레톤 UI
 */
export default function NewsItemSkeleton() {
  const { isMobile } = useMediaQueries();
  const skeletonCount = isMobile ? 3 : 2; // 모바일 4개, 웹 2개

  return (
    <S.Container>
      {Array.from({ length: skeletonCount }, (_, index) => (
        <S.SkeletonContainer key={index}>
          {/* -- 썸네일 영역 -- */}
          <S.SkeletonThumbnailWrapper>
            <S.SkeletonThumbnail $isMobile={isMobile} />
          </S.SkeletonThumbnailWrapper>

          {/* -- 컨텐츠 영역 -- */}
          <S.SkeletonContentWrapper>
            {/* 타이틀 */}
            <S.SkeletonTitle $isMobile={isMobile} />

            {/* 본문 2줄 (MultiSkeleton 활용) */}
            <MultiSkeleton count={2} $isMobile={isMobile} />

            {/* 태그 2개 */}
            <S.SkeletonTagContainer $isMobile={isMobile}>
              <S.SkeletonTag $isMobile={isMobile} />
              <S.SkeletonTag $isMobile={isMobile} />
            </S.SkeletonTagContainer>
          </S.SkeletonContentWrapper>
        </S.SkeletonContainer>
      ))}
    </S.Container>
  );
}
