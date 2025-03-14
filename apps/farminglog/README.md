**Farming Log**는 Farm System의 활동을 기록하고 공유할 수 있는 "파밍로그"의 Frontend 레포입니다.

---

## 📁 폴더 구조

```
src/
├─ assets/                # 이미지, 폰트 등 정적 자산 관리 폴더
├─ components/            # 재사용 가능한 공통 UI 컴포넌트
├─ config/                # Axios와 같은 설정을 관리하는 폴더
├─ hooks/                 # 사용자 정의 React 훅을 모아놓는 폴더
├─ models/                # API 데이터 모델 및 타입 정의
├─ pages/                 # 페이지별 컴포넌트들을 관리하는 폴더
├─ services/              # API 호출 및 외부 서비스와의 상호작용 관리
├─ store/                 # 전역 상태 관리를 위한 폴더 (예: Zustand)
└─ utils/                 # 유틸리티 함수 및 헬퍼 함수 모음 (jwt 함수 등)

```

---

## ⚙️ 기술 스택

- **프론트엔드**: React (Vite, TypeScript)
- **상태 관리**:
  - **서버 상태**: TanStack Query (React Query)
  - **클라이언트 상태**: Zustand
- **스타일링**: Styled-Components
- **API 요청**: Axios
- **라우팅**: React Router
- **배포**: Vercel

---

## 📌 브랜치 전략

### 1. **메인 브랜치**

- `main`: 배포 및 안정적인 코드가 위치하는 브랜치

### 2. **개발 브랜치**

- `develop`: 기능 개발이 진행되는 메인 브랜치로, `feature` 브랜치가 병합됨

### 3. **기능 개발 브랜치**

- `feature/#이슈번호`: 새로운 기능 추가 및 개발 진행 (예: `feature/#13`, `feature/#7`)

### 4. **버그 수정 브랜치**

- `fix/`: 기존 기능에서 발생한 버그를 수정하는 브랜치 (예: `fix/#4`)

---

## 👥 협업 방식

1. **Git Flow 기반 브랜치 전략**을 준수합니다.
2. 새로운 기능 개발 시 `feature/#이슈번호` 브랜치를 생성하여 작업 후 `develop` 브랜치로 PR을 생성합니다.
3. R이 생성되면 CI/CD 파이프라인에서 코드 검사를 수행하고, 검사 통과 후 코드 리뷰를 진행합니다.
4. 코드 리뷰에서 approve를 받은 후 develop 브랜치에 병합합니다.
5. 일정 단위 개발이 완료되면 aprrove를 받고 `develop` 브랜치를 `main` 브랜치로 병합하여 배포합니다.
6. 모든 커밋 메시지는 [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) 형식을 따릅니다.
   - `feat: 새로운 기능 추가`
   - `fix: 버그 수정`
   - `refactor: 코드 리팩토링`
   - `docs: 문서 변경`
   - `style: 스타일 변경 (코드 포맷, 세미콜론 추가 등)`
   - `chore: 빌드 설정 및 기타 변경사항`

---

수정해서 CI/CD 파이프라인을 포함한 배포 방식을 정리할게.

---

## 🚀 배포 방식

### 📍 Vercel + CI/CD 자동 배포

이 프로젝트는 **Vercel**을 사용하여 배포되며, **CI/CD 파이프라인**을 통해 자동 배포가 이루어집니다.

- `develop` 브랜치: **Vercel Preview URL**에서 확인 가능
- `main` 브랜치: **Production 배포**

### 📌 배포 프로세스

1. **PR 생성 시 CI/CD 실행**

   - `feature/#이슈번호` → `develop` 브랜치로 PR을 생성하면, **CI/CD에서 코드 검사 (Lint, Test 등)를 수행**
   - 코드 검사를 통과하면 리뷰 후 `develop` 브랜치에 병합

2. **`develop` 브랜치 병합 시 자동 배포 (Preview)**

   - `develop` 브랜치로 병합되면, **Vercel Preview 배포가 자동 실행**
   - URL 예시: `https://farming-log-develop.vercel.app/`

3. **`main` 브랜치 병합 시 프로덕션 배포**
   - `develop` 브랜치를 `main` 브랜치에 병합하면 **프로덕션(운영) 환경으로 자동 배포**
   - 도메인 구매 후 설정 예정 (예: `https://farming-log.com/`)

---

### 📌 배포 URL

- **Preview (개발 환경)**: `https://farming-log-develop.vercel.app/`
  - `develop` 브랜치에 코드가 반영될 때 **자동으로 배포됨**
- **Production (운영 환경)**: 도메인 구매 후 설정 예정
  - `main` 브랜치에 병합되면 **자동으로 프로덕션 배포됨**

---

### 🔧 환경 변수 설정 (`.env`)

```env
VITE_API_BASE_URL=your-api-url
VITE_OTHER_CONFIG=your-config
```

⚠ **Vercel 환경 변수 설정**

- Vercel 대시보드에서 `Environment Variables`를 설정해야 정상 작동함
- `develop`과 `main` 환경에서 각각 다른 변수를 사용할 수도 있음

---

## 📢 프로젝트 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/DguFarmSystem/FarmingLong-FE.git

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

---
