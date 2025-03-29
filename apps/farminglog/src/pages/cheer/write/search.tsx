import { useState, useEffect } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import * as S from './search.styled';
import GoBackImage from '@/assets/Icons/corner-up-left.png';
import searchIcon from '@/assets/Icons/search_icon.png';
import { useUserSuggestQuery } from '@/services/query/useUserSuggestQuery';

// 이것도... useUserSuggestQuery안에도 있고 여기도 있고 난리도 아니네
interface UserInfo {
  userId: number;
  name: string;
  generation: number;
  track: string;
  profileImageUrl: string;
}

// 트랙 한글 변환
const formatTrack = (track: string): string => {
  const trackMap: Record<string, string> = {
    SECURITY_WEB: '보안/웹',
    BIGDATA: '빅데이터',
    IOT_ROBOTICS: '사물인터넷',
    AI: '인공지능',
    GAMING_VIDEO: '게임/영상',
  };

  return trackMap[track] || track;
};

// 이것도 나중에 다 빼야함... 밖으로 가랏...
interface SearchProps {
  onSelectUser: (user: { userId: number; name: string }) => void;
}

export default function Search({ onSelectUser }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<UserInfo[]>([]);

  const { isApp, isMobile, isTablet, isDesktop } = useMediaQueries();

  const { data } = useUserSuggestQuery(query);

 useEffect(() => {
  if (!query || !data) {
    setResults([]);
    return;
  }

  if (Array.isArray(data)) {
    setResults(data);
  } else {
    setResults([]);
  }
}, [query, data]);


  // 유저 클릭 시 
  const handleSelectItem = (user: UserInfo) => {
  onSelectUser({ userId: user.userId, name: user.name });
};


  return (
    <S.SearchContainer
      $isApp={isApp}
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      {/* 헤더 */}
      <S.SearchHeader
        $isApp={isApp}
        $isMobile={isMobile}
        $isDesktop={isDesktop}
      >
        <S.GoBackButton
          $isApp={isApp}
          $isMobile={isMobile}
          $isDesktop={isDesktop}
          onClick={() => window.history.back()}
        >
          <img src={GoBackImage} alt="뒤로가기" />
        </S.GoBackButton>

        <S.SearchTitle
          $isApp={isApp}
          $isMobile={isMobile}
          $isDesktop={isDesktop}
        >
          응원하기
        </S.SearchTitle>
      </S.SearchHeader>

      <S.Title>회원 찾기</S.Title>

      <S.SearchWrapper>
        <S.SearchBar>
          <S.SearchInput
            type="text"
            value={query}
            placeholder="응원할 회원의 이름을 입력해 주세요"
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.SearchButton>
            <img
              src={searchIcon}
              alt="search"
              style={{
                width: isMobile ? '25px' : '50px',
                height: isMobile ? '25px' : '50px',
              }}
            />
          </S.SearchButton>
        </S.SearchBar>

        {results.length > 0 && (
          <S.ResultsList>
            {results.map((user) => (
              <S.ResultItem
                key={user.userId}
                onClick={() => handleSelectItem(user)}
              >
                <S.ItemIconWrapper>
                  <img
                    src={user.profileImageUrl || '/images/icon_leaf.png'}
                    alt="icon"
                  />
                </S.ItemIconWrapper>
                <S.ItemTextWrapper>
                  <span className="name">{user.name}</span>
                  <span className="sub">
                    {user.generation}기 {formatTrack(user.track)}
                  </span>
                </S.ItemTextWrapper>
              </S.ResultItem>
            ))}
          </S.ResultsList>
        )}
      </S.SearchWrapper>
    </S.SearchContainer>
  );
}
