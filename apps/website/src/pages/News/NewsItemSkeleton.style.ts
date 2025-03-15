import styled, { keyframes } from 'styled-components';

/** 모바일용 prop 인터페이스 */
interface MobileProps {
  $isMobile?: boolean;
}

/** Shimmer 효과 keyframe */
const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

/** 
 * (1) 전체 Skeleton 컨테이너
 * - 기존 NewsItem과 비슷한 Flex 레이아웃
 */
export const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
`;

/** 
 * (2) 썸네일 래퍼 
 */
export const SkeletonThumbnailWrapper = styled.div`
  flex-shrink: 0;
`;

/** 
 * (3) 컨텐츠 래퍼 
 */
export const SkeletonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

/** 
 * (4) 공통 스켈레톤 박스에 대한 기본 스타일 
 * - width/height를 props로 받지 않음 
 * - 배경, 애니메이션 등만 공통으로 지정 
 */
const BasicSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #eee;
  background-image: linear-gradient(
    90deg,
    #eee 0%,
    #ddd 40%,
    #eee 80%,
    #eee 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.6s linear infinite;
  border-radius: 4px;
`;

/** 
 * (5) 실제 썸네일 스켈레톤 
 * - 크기를 여기서 정의 
 */
export const SkeletonThumbnail = styled(BasicSkeleton)<MobileProps>`
  width: ${({ $isMobile }) => ($isMobile ? '30vw' : '311px')};
  height: ${({ $isMobile }) => ($isMobile ? 'auto' : '200px')};
  flex-shrink: 0;
  aspect-ratio: ${({ $isMobile }) => ($isMobile ? '16/9' : '311/200')};
`;

/** 
 * (6) 타이틀 스켈레톤 
 */
export const SkeletonTitle = styled(BasicSkeleton)<MobileProps>`
  width: 100%;
  height: auto;
  align-self: stretch;
  text-align: start;

  color: var(--FarmSystem_Black, #191919);
  font-size: ${({ $isMobile }) => ($isMobile ? '18px' : '24px')};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ $isMobile }) => ($isMobile ? '22px' : '30px')};
  letter-spacing: -0.24px;
`;

/** 
 * (7) 본문 텍스트 스켈레톤 
 * - 여러 줄을 찍어야 하면 MultiSkeleton으로 반복 
 */
export const SkeletonText = styled(BasicSkeleton)<MobileProps>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'auto' : '30px')};
  border-radius: 4px;
`;

/** 
 * (8) 태그 컨테이너 
 */
export const SkeletonTagContainer = styled.div<{$isMobile: boolean}>`
  display: flex;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? '5px' : '10px')};
  align-self: stretch;
`;

/** 
 * (9) 태그 스켈레톤 
 */
export const SkeletonTag = styled(BasicSkeleton)<MobileProps>`
  display: flex;
  width: ${({ $isMobile }) => ($isMobile ? '20px' : '60px')};
  height: ${({ $isMobile }) => ($isMobile ? '10px' : '30px')};
  padding: ${({ $isMobile }) => ($isMobile ? '3px 10px' : '5px 15px')};
  justify-content: center;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? '5px' : '10px')};
  
  border-radius: 15px;
  background: var(--FarmSystem_LightGrey)ß;
  text-align: center;
`;

/**
 * container 추가 (10)
 */
export const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  margin-top: 70px;
`;
