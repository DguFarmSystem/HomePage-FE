import { useState } from 'react';
import * as S from './ProjectList.styles';
// import BlankImg from '../../../assets/Images/Blog_Project/blank_img.svg';
// import ProjectItem, { ProjectItemProps } from './ProjectItem';
import useMediaQueries from '@/hooks/useMediaQueries';
import Logger from '@/utils/Logger';

/**
 * 드롭다운을 구분하기 위한 타입
 * - "grade" = 기수, "track" = 트랙
 */
type DropdownType = 'grade' | 'track' | '';

const ProjectList: React.FC = () => {
  // 하나만 열리도록, 어떤 드롭다운이 열려 있는지 state로 관리
  const [openDropdown, setOpenDropdown] = useState<DropdownType>('');

  // 드롭다운 열림/닫힘 토글 함수
  const handleToggleDropdown = (type: DropdownType) => {
    // 이미 열려 있는 상태면 닫고, 아니면 해당 타입으로 연다
    setOpenDropdown(prev => (prev === type ? '' : type));
  };

  // 드롭다운에서 선택 시 동작 (필요 시 구현)
  const handleSelectOption = (option: string) => {
    Logger.log('선택한 옵션:', option);
    // 선택 후 바로 닫고 싶다면:
    setOpenDropdown('');
  };

  const { isTablet, isMobile } = useMediaQueries();

  return (
    <S.Container>
      <S.TableContainer $isTablet={isTablet} $isMobile={isMobile}>
        {/* 기수 */}
        <S.FilterWrapper>
          <S.FilterGradeButton onClick={() => handleToggleDropdown('grade')} $isTablet={isTablet} $isMobile={isMobile}>
            <a>기수</a> <a>▾</a>
          </S.FilterGradeButton>
          {openDropdown === 'grade' && (
            <S.DropdownGradeMenu $isTablet={isTablet} $isMobile={isMobile}>
              {['4기', '3기', '2기', '1기'].map((grade) => (
                <S.DropdownItem
                  key={grade}
                  onClick={() => handleSelectOption(grade)}$isTablet={isTablet} $isMobile={isMobile}>
                  {grade}
                </S.DropdownItem>
              ))}
            </S.DropdownGradeMenu>
          )}
        </S.FilterWrapper>

        {/* 트랙 */}
        <S.FilterWrapper>
          <S.FilterTrackButton onClick={() => handleToggleDropdown('track')} $isTablet={isTablet} $isMobile={isMobile}>
            <a>트랙</a> <a>▾</a>
          </S.FilterTrackButton>
          {openDropdown === 'track' && (
            <S.DropdownTrackMenu $isTablet={isTablet} $isMobile={isMobile}>
              {['Union', '빅데이터', '사물인터넷/로봇', '인공지능', '보안/웹', '게임/영상'].map(
                (track) => (
                  <S.DropdownItem
                    key={track}
                    onClick={() => handleSelectOption(track)}$isTablet={isTablet} $isMobile={isMobile}>
                    {track}
                  </S.DropdownItem>
                )
              )}
            </S.DropdownTrackMenu>
          )}
        </S.FilterWrapper>
      </S.TableContainer>
      
      {/* 프로젝트 카드 리스트 */}
      {/* 지금은 더미데이터의 갯수로 블로그가 있는지 없는지 판단합니다. 디버깅시 projectdata.length>6 이렇게 하면 아무 것도 없는 창 뜹니다.*/}
      <S.Wrapper>
        {/* {(projectData.length > 6) ? (
          <S.ListContainer $isTablet={isTablet} $isBig={isBig}>
            {projectData.map((item, index) => (
              <ProjectItem key={index} {...item} />
            ))}
          </S.ListContainer>
        ) : (
          <S.TextContainer $isMobile={isMobile}>
            아직 등록된 글이 없어요.
            <a>파밍로그를 통해 글을 작성해보세요!</a>
          </S.TextContainer>
        )} */}
          <S.TextContainer $isMobile={isMobile}>
            아직 등록된 글이 없어요.
            <a>파밍로그를 통해 글을 작성해보세요!</a>
          </S.TextContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProjectList;
