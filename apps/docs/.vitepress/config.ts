import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'FarmSystem Docs',
  description: '팜시스템 웹사이트 TF팀 프론트엔드 문서',
  lang: 'ko-KR',
  srcDir: 'src',
  themeConfig: {
    sidebar: [
      {
        text: '깃/깃허브 컨벤션',
        items: [
          { text: '커밋 메시지', link: '/git/commit-messeage' },
          { text: '브랜치와 브랜치 전략', link: '/git/branch' },
        ],
      },
      {
        text: '프로젝트 구조',
        items: [
          { text: '모노레포에 대하여', link: '/structure/about-monorepo' },
          { text: '개별 리액트 폴더 구조', link: '/structure/react-folder-structure' },
        ],
      },
    ],
  },
})
