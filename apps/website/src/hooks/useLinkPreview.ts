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
 */
export const isValidResponse = (res: APIResponse | null): boolean => {
  if (!res) return false;
  return res.title !== '' && res.image !== '';
};

// 프록시 서버 URL (CORS 헤더가 추가되어야 합니다)
const proxyUrl = "https://corsproxy.io/?key=8f9768c4&url=";

/**
 * extractMetaContent
 * 개선된 정규표현식을 사용하여 HTML에서 meta 태그의 content 값을 추출합니다.
 */
const extractMetaContent = (html: string, key: string): string => {
  const regex = new RegExp(
    `<meta\\s+(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["'][^>]*>|<meta\\s+content=["']([^"']*)["'][^>]*(?:property|name)=["']${key}["'][^>]*>`,
    'i'
  );
  const match = html.match(regex);
  const result = match ? (match[1] || match[2] || '') : '';
  console.log(`extractMetaContent(${key}):`, result);
  return result;
};

/**
 * cleanHTML
 * HTML 문자열에서 주석을 제거합니다.
 */
const cleanHTML = (html: string): string => {
  const cleaned = html.replace(/<!--[\s\S]*?-->/g, '');
  console.log('cleanHTML:', cleaned.slice(0, 200) + '...');
  return cleaned;
};

/**
 * getDOMContent
 * Document에서 여러 selector를 순차적으로 시도해 meta 태그의 content 값을 추출합니다.
 */
const getDOMContent = (doc: Document, selectors: string[]): string => {
  for (const selector of selectors) {
    const element = doc.querySelector(selector);
    const content = element?.getAttribute('content')?.trim();
    if (content) {
      console.log(`getDOMContent(${selector}):`, content);
      return content;
    } else {
      console.log(`getDOMContent(${selector}): Not found.`);
    }
  }
  return '';
};

/**
 * parseHTML
 * HTML 문자열을 파싱하여 OG 메타 태그 정보를 추출합니다.
 * - DOMSelector로 우선 시도한 후, 실패 시 추가 fallback 선택자들로 탐색합니다.
 * - OG 태그가 없으면 <title> 태그를 이용하는 콜백 방식으로 처리합니다.
 * - 최종 fallback으로 정규표현식을 적용합니다.
 */
const parseHTML = (html: string, originalUrl: string): APIResponse => {
  console.log('parseHTML: 시작');
  const clean = cleanHTML(html);
  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, 'text/html');
  console.log('DOMParser 파싱 완료.');

  // --- TITLE ---
  let title = getDOMContent(doc, [
    'meta[property="og:title"]',
    'meta[name="og:title"]',
    'meta[name="title"]',
  ]);
  if (!title) {
    title = doc.querySelector('title')?.textContent?.trim() || '';
    console.log('Fallback <title> callback:', title);
  }
  if (!title) {
    if (doc.querySelector('.post-title')?.textContent?.trim()) {
      title = doc.querySelector('.post-title')!.textContent!.trim();
      console.log('Fallback .post-title:', title);
    } else if (doc.querySelector('.entry-title')?.textContent?.trim()) {
      title = doc.querySelector('.entry-title')!.textContent!.trim();
      console.log('Fallback .entry-title:', title);
    } else if (doc.querySelector('h1[class*="title"] a')?.textContent?.trim()) {
      title = doc.querySelector('h1[class*="title"] a')!.textContent!.trim();
      console.log('Fallback h1[class*="title"] a:', title);
    } else if (doc.querySelector('h1[class*="title"]')?.textContent?.trim()) {
      title = doc.querySelector('h1[class*="title"]')!.textContent!.trim();
      console.log('Fallback h1[class*="title"]:', title);
    }
  }
  if (!title) {
    title = extractMetaContent(clean, 'og:title');
    console.log('Final Fallback extractMetaContent(og:title):', title);
  }

  // --- DESCRIPTION ---
  let description = getDOMContent(doc, [
    'meta[property="og:description"]',
    'meta[name="og:description"]',
    'meta[name="description"]',
  ]);
  if (!description && doc.querySelector('#description')) {
    description = doc.querySelector('#description')!.textContent!.trim();
    console.log('Fallback #description:', description);
  }
  if (!description) {
    description = extractMetaContent(clean, 'og:description');
    console.log('Final Fallback extractMetaContent(og:description):', description);
  }

  // --- IMAGE ---
  let image = getDOMContent(doc, [
    'meta[property="og:image"]',
    'meta[name="og:image"]',
  ]);
  if (!image) {
    const imgElement = doc.querySelector('img');
    if (imgElement) {
      image = imgElement.getAttribute('src')?.trim() || '';
      console.log('Fallback first <img> src:', image);
    }
  }
  if (!image) {
    image = extractMetaContent(clean, 'og:image');
    console.log('Final Fallback extractMetaContent(og:image):', image);
  }

  // --- SITE NAME & URL ---
  let siteName = getDOMContent(doc, [
    'meta[property="og:site_name"]',
    'meta[name="og:site_name"]',
  ]);
  let ogUrl = getDOMContent(doc, [
    'meta[property="og:url"]',
    'meta[name="og:url"]',
  ]);
  if (!ogUrl) {
    ogUrl = originalUrl;
    console.log('Fallback: ogUrl 원본 URL 사용:', ogUrl);
  }

  // hostname 추출
  let hostname = '';
  try {
    hostname = new URL(ogUrl).hostname;
    console.log('Hostname 추출:', hostname);
  } catch (e) {
    console.log('Hostname 추출 실패:', e);
    hostname = '';
  }

  console.log('parseHTML: 완료');
  return { title, description, image, siteName, hostname };
};

/**
 * useLinkPreview
 * 주어진 URL로부터 OG 메타 정보를 추출합니다.
 * 커스텀 fetcher가 있다면 이를 사용하고, 없으면 기본 fetch 로직을 사용합니다.
 * Content-Type 헤더가 없으면 기본값("text/html")을 적용하며,
 * text/plain인 경우에도 파싱하고, 프록시 서버로부터 내용이 없으면 원본 URL로 재시도합니다.
 */
export const useLinkPreview = (
  url: string,
  fetcher?: (url: string) => Promise<APIResponse | null>
) => {
  const [metadata, setMetadata] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isMounted = useRef(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('useLinkPreview: 시작', url);
    isMounted.current = true;
    setLoading(true);
    const proxyFetchUrl = proxyUrl + encodeURIComponent(url);
    console.log('proxyFetchUrl:', proxyFetchUrl);

    const fetchHTML = (fetchUrl: string): Promise<string> => {
      return fetch(fetchUrl)
        .then((res) => {
          let contentType = res.headers.get('Content-Type') || 'text/html';
          console.log('Content-Type:', contentType);
          // text/html와 text/plain 둘 다 허용
          if (
            !contentType.toLowerCase().includes('text/html') &&
            !contentType.toLowerCase().includes('text/plain')
          ) {
            throw new Error(`Invalid Content-Type: ${contentType}`);
          }
          return res.text();
        });
    };

    if (fetcher) {
      fetcher(proxyFetchUrl)
        .then((res) => {
          if (isMounted.current) {
            console.log('커스텀 fetcher 결과:', res);
            if (isValidResponse(res)) {
              setMetadata(res);
            } else {
              setMetadata(null);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('커스텀 fetcher 에러:', err);
          setError(handleApiError(err));
          if (isMounted.current) {
            setMetadata(null);
            setLoading(false);
          }
        });
    } else {
      fetchHTML(proxyFetchUrl)
        .then((html) => {
          console.log('프록시 HTML 길이:', html.length);
          if (html.length === 0) {
            console.warn('프록시 서버에서 빈 HTML 반환, 원본 URL로 재시도');
            return fetchHTML(url);
          }
          return html;
        })
        .then((html) => {
          console.log('최종 HTML 길이:', html.length);
          if (isMounted.current) {
            try {
              const parsedData = parseHTML(html, url);
              console.log('파싱 결과:', parsedData);
              setMetadata(parsedData);
            } catch (parseError) {
              console.error('파싱 에러:', parseError);
              setError(handleApiError(parseError));
              setMetadata(null);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('fetch 에러:', err);
          setError(handleApiError(err));
          if (isMounted.current) {
            setMetadata(null);
            setLoading(false);
          }
        });
    }

    return () => {
      isMounted.current = false;
      console.log('useLinkPreview: 클린업');
    };
  }, [url, fetcher]);

  return { metadata, loading, error };
};
