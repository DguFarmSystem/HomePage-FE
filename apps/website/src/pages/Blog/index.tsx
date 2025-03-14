import { useState } from 'react';
import * as S from './index.styles';

import BlogList from './Blog/BlogList';
import ProjectList from './Project/ProjectList';
import useMediaQueries from '@/hooks/useMediaQueries';

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'project'>('project');
  const { isTablet, isMobile } = useMediaQueries();

  return (
    <>
    <S.Container>
      <S.ButtonWrapper $isMobile={isMobile} $isTablet={isTablet}>
        <S.ButtonContainer>
          <S.ToggleButton active={activeTab === 'project'} onClick={() => setActiveTab('project')} $isMobile={isMobile}>
            <div>프로젝트</div>
          </S.ToggleButton>
          <S.Divider $isMobile={isMobile}>|</S.Divider>
          <S.ToggleButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} $isMobile={isMobile}>
            <div>블로그</div>
          </S.ToggleButton>
        </S.ButtonContainer>
      </S.ButtonWrapper>
        {activeTab === 'project' && (
          <S.ActiveTabIndicator $isTablet={isTablet} $isMobile={isMobile}>
            <ProjectList />
          </S.ActiveTabIndicator>
        )}
        {activeTab === 'blog' && (
          <S.ActiveTabIndicator $isTablet={isTablet} $isMobile={isMobile}>
            <BlogList />
          </S.ActiveTabIndicator>
        )}
    </S.Container>
    </>
  );
};

export default Blog;
