---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Farmsystem Frontend Documents"
  tagline: "팜시스템 프론트엔드 문서"
  image:
    loading: eager
    fetchpriority: high
    decoding: async
    src: /images/FarmSystem_Logo.svg
    alt: Farmsystem Logo
  actions:
    - text: 온보딩 시작하기
      # 일단은 커밋 메세지 문서로 이동... 나중에 수정
      link: /git/commit-messeage
    - theme: alt
      text: Github
      link: https://github.com/DguFarmSystem/HomePage-FE

features:
  - icon: 📚
    title: 프로젝트 전반 이해하기
    details: 내부 문서와 온보딩 자료를 통해 프로젝트 구조와 업무 흐름을 파악해보세요.
  - icon: 🛠️
    title: 개발 환경 및 도구 세팅
    details: 개발 환경 구축 방법과 필수 도구 사용법에 관한 자세한 가이드가 준비되어 있습니다.
  - icon: 🤝
    title: 협업 및 코드 리뷰 프로세스 익히기
    details: 팀의 코드 리뷰 기준과 협업 방식을 내부 문서를 통해 숙지하고, 효율적인 커뮤니케이션을 경험해보세요.
---