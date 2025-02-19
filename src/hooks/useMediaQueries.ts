import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  /* 
   * Union 작업중 콘텐츠 박스에서 767보다 더 작은 크기 조절이 필요해서 isTiny를 추가했습니다.
   * 반응형 작업하실 때 한번더 봐주시고 고쳐주시면 좋을거 같습니다.
   * 프로젝트나 블로그 만들 때, 사이즈가 넓어질 때 세부적으로 나눌 게 있어 isBig를 추가했습니다.
  */
  const isTiny = useMediaQuery({ query: "(max-width: 385px)" });
  const isBig = useMediaQuery({ query: "(min-width: 1730px)" });
  const isApp = useMediaQuery({ query: "(max-width: 440px)"});
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isIpadPro = useMediaQuery({
    query: "(min-width: 700px) and (max-width: 1400px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)" 
  });

  return { isTiny, isBig, isApp, isMobile, isTablet, isDesktop, isIpadPro };
};

export default useMediaQueries;