import * as S from './ProjectItem.style';
import { Track } from '@/models/apply';

export enum ProjectGeneration {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
}

// 카테고리 enum을 텍스트 매핑
const getProjectGeneration = (category: ProjectGeneration): string => {
  switch (category) {
    case ProjectGeneration.FIRST:
      return "1기";
    case ProjectGeneration.SECOND:
      return "2기";
    case ProjectGeneration.THIRD:
      return "3기";    
    case ProjectGeneration.FOURTH:
      return "4기";
    case ProjectGeneration.FIFTH:
      return "5기";
    default:
      return "";
  }
};

export interface ProjectTag {
  generation: ProjectGeneration[];
  track: Track[]
}

export interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: ProjectTag[];
}


const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageUrl,tags}) => {
  return (
    <S.Card>
      <S.Image><img src={imageUrl} alt={title}></img></S.Image>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.TagContainer>
  {tags.map((tag, index) => (
    <>
      {tag.generation.map((gen) => (
         <S.Tag key={`gen-${index}-${gen}`}>
           {getProjectGeneration(gen)}
         </S.Tag>
      ))}
      {tag.track.map((trackItem, tIndex) => (
         <S.Tag key={`track-${index}-${tIndex}`}>
           {trackItem}
         </S.Tag>
      ))}
    </>
  ))}
</S.TagContainer>
      </S.Content>
    </S.Card>
  );
};

export default ProjectItem;
