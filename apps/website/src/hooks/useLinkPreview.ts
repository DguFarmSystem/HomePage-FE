import { useState, useEffect, useRef } from 'react';
import { handleApiError } from '@/utils/handleApiError';

export interface APIResponse {
  title: string;
  description: string;
  image: string;
  siteName: string;
  hostname: string;
}

/**
 * isValidResponse
 * APIResponse가 유효한지를 체크합니다.
 * (필수 필드가 빈 문자열이면 유효하지 않다고 간주)
 */
export const isValidResponse = (res: APIResponse | null): boolean => {
  if (!res) return false;
  return (
    res.title !== '' &&
    // description은 빈 문자열이어도 허용할 경우 주석 처리
    res.image !== '' 
  );
};

// 프록시 서버 URL (CORS 헤더가 추가되어야 합니다)
// corsproxy.io 는 요청 URL을 쿼리스트링으로 전달합니다.
// const proxyUrl = 'https://corsproxy.io/?key=****&url=';
const proxyUrl = 'https://corsproxy.io/'; // localhost용 프록시

/**
 * extractMetaContent
 * 정규표현식을 사용하여 HTML에서 meta 태그의 content 값을 추출합니다.
 * property 또는 name 속성을 모두 고려합니다.
 */
const extractMetaContent = (html: string, key: string): string => {
  const regex = new RegExp(
    `<meta[^>]*(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    'i'
  );
  const match = html.match(regex);
  return match ? match[1] : '';
};

/**
 * cleanHTML
 * HTML 문자열에서 주석을 제거합니다.
 * (주석 안에 있는 OG 태그도 파싱할 수 있도록)
 */
const cleanHTML = (html: string): string => {
  return html.replace(/<!--[\s\S]*?-->/g, '');  // 주석 제거
};

/**
 * parseHTML
 * HTML 문자열을 파싱하여 OG 메타 태그 정보를 추출합니다.
 * DOMParser와 정규표현식 fallback을 함께 사용합니다.
 */
const parseHTML = (html: string, originalUrl: string): APIResponse => {
  // 먼저 주석 제거 (OG 태그가 주석에 있을 경우 보완)
  const clean = cleanHTML(html);
  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, 'text/html');

  // OG 메타 태그 추출
  let title =
    doc.querySelector('meta[property="og:title"], meta[name="og:title"]')?.getAttribute('content') || '';
  let description =
    doc.querySelector('meta[property="og:description"], meta[name="og:description"]')?.getAttribute('content') || '';
  let image =
    doc.querySelector('meta[property="og:image"], meta[name="og:image"]')?.getAttribute('content') || '';
  let siteName =
    doc.querySelector('meta[property="og:site_name"], meta[name="og:site_name"]')?.getAttribute('content') || '';
  let ogUrl =
    doc.querySelector('meta[property="og:url"], meta[name="og:url"]')?.getAttribute('content') || originalUrl;
  
  // fallback: 정규표현식으로 추출 (값이 비어있으면)
  if (!title) {
    title = extractMetaContent(clean, 'og:title');
  }
  if (!description) {
    description = extractMetaContent(clean, 'og:description');
  }
  if (!image) {
    image = extractMetaContent(clean, 'og:image');
  }
  if (!siteName) {
    siteName = extractMetaContent(clean, 'og:site_name');
  }
  if (!ogUrl) {
    ogUrl = originalUrl;
  }

  // ogUrl을 이용해 hostname 추출
  let hostname = '';
  try {
    hostname = new URL(ogUrl).hostname;
  } catch {
    hostname = ''; // URL 파싱 실패 시 빈 문자열
  }

  return { title, description, image, siteName, hostname };
};

export const useLinkPreview = (
  url: string,
  fetcher?: (url: string) => Promise<APIResponse | null>
) => {
  const [metadata, setMetadata] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isMounted = useRef(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    isMounted.current = true;
    setLoading(true);

    // 프록시를 통한 요청 URL 구성
    const proxyFetchUrl = proxyUrl + encodeURIComponent(url);

    if (fetcher) {
      fetcher(proxyFetchUrl)
        .then((res) => {
          if (isMounted.current) {
            if (isValidResponse(res)) {
              setMetadata(res);
            } else {
              setMetadata(null); // 유효하지 않으면 null 처리
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          setError(handleApiError(err));
          if (isMounted.current) {
            setMetadata(null);
            setLoading(false);
          }
        });
    } else {
      // 기본 fetcher: 프록시 서버를 통해 HTML 텍스트를 가져와 파싱
      fetch(proxyFetchUrl)
        .then((res) => res.text())
        .then((html) => {
          if (isMounted.current) {
            try {
              const parsedData = parseHTML(html, url);
              setMetadata(parsedData);  // OG 메타 태그 파싱한 결과를 상태로 저장
            } catch (parseError) {
              setError(handleApiError(parseError));
              setMetadata(null);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          setError(handleApiError(err));
          if (isMounted.current) {
            setMetadata(null);
            setLoading(false);
          }
        });
    }

    return () => {
      isMounted.current = false;
    };
  }, [url, fetcher]);

  return { metadata, loading, error };
};
