import * as S from './BlogList.styles';
import BlogItem, { BlogItemProps } from './BlogItem';
import BlankImg from '../../assets/Images/Blog_Project/blank_img.svg';
import useMediaQueries from '@/hooks/useMediaQueries';

/** 샘플용 더미 데이터 */
const blogData: BlogItemProps[] = [
  {
    title: '임시직 프로젝트 1',
    description: '팜시스템에 필요한 모든 정보를 담은 앱! W-300 H-40 고정사이즈로써 2줄까지 소개가 가능하다.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 1',
    description: '팜시스템에 필요한 모든 정보를 담은 앱! W-300 H-40 고정사이즈로써 2줄까지 소개가 가능하다.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 2',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 2.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
  {
    title: '임시직 프로젝트 3',
    description: '백동민 최강 백동민 힘내 백동민 파이팅 3.',
    imageUrl: BlankImg,
    blogUrl: 'https://www.naver.com',
  },
];

const BlogList: React.FC = () => {
  const { isTablet, isBig } = useMediaQueries();

  return (
    <S.Container>
      <S.TableContainer>
        <S.SubDescription> * 블로그 클릭 시 외부로 연결됩니다.</S.SubDescription>
      </S.TableContainer>

      {/* 프로젝트 카드 리스트 */}
      {/* 지금은 더미데이터의 갯수로 블로그가 있는지 없는지 판단합니다. 디버깅시 projectdata.length>6 이렇게 하면 아무 것도 없는 창 뜹니다.*/}
      {(blogData.length > 5) ? (
      <S.ListContainer $isTablet={isTablet} $isBig={isBig}>
        {blogData.map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </S.ListContainer>) : (
          <S.TextContainer>
            아직 등록된 글이 없어요.
            <a>파밍로그를 통해 글을 작성해보세요!</a>
          </S.TextContainer>
      )
      }
    </S.Container>
  );
};

export default BlogList;
