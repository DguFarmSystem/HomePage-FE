import { useState } from 'react';
import * as S from './index.styles';

import BlogList from './BlogList';
import ProjectList from './ProjectList';
import useMediaQueries from '@/hooks/useMediaQueries';

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'project'>('project');
  const { isTablet } = useMediaQueries();

  return (
    <>
    <S.Container>
      <S.ButtonContainer>
        <S.ToggleButton active={activeTab === 'project'} onClick={() => setActiveTab('project')}>
          <div>프로젝트</div>
        </S.ToggleButton>
        <S.Divider>|</S.Divider>
        <S.ToggleButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')}>
          <div>블로그</div>
        </S.ToggleButton>
      </S.ButtonContainer>
        {activeTab === 'project' && (
          <S.ActiveTabIndicator $isTablet={isTablet}>
            <ProjectList />
          </S.ActiveTabIndicator>
        )}
        {activeTab === 'blog' && (
          <S.ActiveTabIndicator $isTablet={isTablet}>
            <BlogList />
          </S.ActiveTabIndicator>
        )}
    </S.Container>
    </>
  );
};

export default Blog;
