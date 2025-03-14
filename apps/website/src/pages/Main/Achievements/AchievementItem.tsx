import * as S from './AchievementItem.styles';
import useMediaQueries from '@/hooks/useMediaQueries';

interface AchievementItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, imageUrl }) => {
  const { isMobile, isTablet } = useMediaQueries();

  return (
    <S.ItemContainer $isMobile={isMobile} $isTablet={isTablet}>
      <S.Image src={imageUrl} alt={title} $isMobile={isMobile} />
      <S.Content $isMobile={isMobile}>
        <S.Title $isMobile={isMobile} $isTablet={isTablet}>{title}</S.Title>
        <S.Description $isMobile={isMobile} $isTablet={isTablet}>{description}</S.Description>
      </S.Content>
    </S.ItemContainer>
  );
};

export default AchievementItem;
