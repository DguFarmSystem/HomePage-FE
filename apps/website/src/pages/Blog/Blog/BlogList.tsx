import React from 'react';
import * as S from './BlogList.styles';
import BlogItem, { BlogItemProps, BlogCategory } from './BlogItem';
import useMediaQueries from '@/hooks/useMediaQueries';

/** 샘플용 더미 데이터 */
let blogData: BlogItemProps[];
// 개발 모드에서만 보이게 수정했습니다.
if (import.meta.env.MODE === 'development' || window.location.hostname.startsWith('dev.')) {
  blogData = [
    {
      blogUrl: 'https://velog.io/',
      tags: [{ category: BlogCategory.SEMINAR }],
    },
    {
      blogUrl: 'https://blog.naver.com/educds/222797324049',
      tags: [{ category: BlogCategory.PROJECT }],
    },
    {
      blogUrl: 'https://blog.encrypted.gg/',
      tags: [{ category: BlogCategory.STUDY }],
    },
    {
      blogUrl: 'https://www.github.com',
      tags: [{ category: BlogCategory.HACKATHON }],
    },
    {
      blogUrl: 'https://ludeno-studying.tistory.com/82',
      tags: [{ category: BlogCategory.REVIEW }],
    },
    {
      blogUrl: 'https://toss.im/',
      tags: [{ category: BlogCategory.LECTURE }],
    },
  ];
} else {
  blogData = [];
}

const BlogList: React.FC = () => {
  const { isMobile, isTablet } = useMediaQueries();
  const isBig = !isMobile; // 모바일이 아닐 때 큰 화면 기준

  return (
    <S.Container>
      <S.TableContainer $isTablet={isTablet} $isMobile={isMobile}>
        <S.SubDescription $isMobile={isMobile}>
          * 블로그 클릭 시 외부 링크로 연결돼요.
        </S.SubDescription>
      </S.TableContainer>

      {blogData.length <= 5 ? (
          <S.TextContainer $isMobile={isMobile}>
            아직 등록된 글이 없어요.
            <a href="/create">파밍로그를 통해 글을 작성해보세요!</a>
          </S.TextContainer>

      ) : (
            <S.DescriptionContainer>
              <S.ListContainer $isTablet={isTablet} $isBig={isBig}>
                {blogData.map((item, index) => (
                  <BlogItem key={index} {...item} />
                ))}
              </S.ListContainer>   
            </S.DescriptionContainer>
      )}
    </S.Container>
  );
};

export default BlogList;
