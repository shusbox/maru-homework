# Maru Homework - React TODO 관리 앱 과제

React + TypeScript + Emotion을 활용한 TODO 관리 웹 애플리케이션 과제 저장소입니다.

## 📂 프로젝트 구조

```
maru-homework/
├── configs/                    # 공통 설정 파일
│   ├── eslint.config.js       # ESLint 설정
│   ├── tsconfig.base.json     # TypeScript 베이스 설정
│   ├── tsconfig.app.json      # 앱용 TypeScript 설정
│   ├── tsconfig.node.json     # Node용 TypeScript 설정
│   ├── vite.config.ts         # Vite 빌드 설정
│   └── README.md              # 설정 파일 문서
│
├── example/                    # 참고용 예시 프로젝트
│   ├── src/
│   ├── package.json
│   └── README.md              # 과제 요구사항 및 가이드
│
└── submission/                 # 과제 제출용 디렉토리
    ├── harinsd404/            # harinsd404 제출 프로젝트
    │   ├── src/
    │   ├── package.json
    │   └── README.md
    └── shusbox/               # shusbox 제출 프로젝트
        ├── src/
        ├── package.json
        └── README.md
```

## 🎯 과제 개요

### 필수 기술 스택
- **React** 19+
- **TypeScript** 5+
- **@emotion/react** & **@emotion/styled** (CSS-in-JS)
- **React Router** 7+
- **Day.js** (날짜 포맷팅)
- **Vite** (빌드 도구)

### 필수 조건
- ✅ Day.js 사용 필수 (날짜 표시 및 포맷팅)
- ✅ LocalStorage 사용 (데이터 영구 저장)
- ✅ TypeScript (any 사용 최소화)
- ✅ @emotion/react & @emotion/styled (모든 스타일링)
- ✅ 데스크탑 전용 (최소 1024px, 반응형 불필요)
- ✅ ESLint 에러 0개

### 금지 사항
- ❌ UI 라이브러리 사용 금지 (MUI, Ant Design, shadcn/ui 등)
- ❌ Axios 사용 금지 (LocalStorage만 사용)

## 📋 페이지 구성 (총 3개)

1. **Main Page** (`/`) - TODO 목록 조회 및 관리
2. **Create Page** (`/create`) - 새로운 TODO 추가
3. **About Page** (`/about`) - 앱 소개 및 사용 가이드

자세한 요구사항은 `example/README.md`를 참고하세요.

## 🔧 중앙 설정 관리 (configs/)

모든 프로젝트의 설정 파일은 `configs/` 디렉토리에서 중앙 관리됩니다.

### 설정 참조 방식

**TypeScript 설정** (extends 사용):
```json
{
  "extends": "../configs/tsconfig.base.json"
}
```

**ESLint/Vite 설정** (export 사용):
```js
export { default } from '../configs/eslint.config.js'
```

### 장점
- 설정 파일 중복 제거
- 일관된 설정 유지
- 중앙집중식 관리로 유지보수 용이
- 새 프로젝트 추가 시 빠른 설정

자세한 내용은 `configs/README.md`를 참고하세요.

## 🚀 시작하기

### 1. 의존성 설치

프로젝트 루트에서:
```bash
pnpm install
```

각 프로젝트별 설치:
```bash
# example 프로젝트
cd example && pnpm install

# harinsd404 프로젝트
cd submission/harinsd404 && pnpm install

# shusbox 프로젝트
cd submission/shusbox && pnpm install
```

### 2. 개발 서버 실행

```bash
# example 프로젝트
cd example && pnpm dev

# harinsd404 프로젝트
cd submission/harinsd404 && pnpm dev

# shusbox 프로젝트
cd submission/shusbox && pnpm dev
```

기본 포트: http://localhost:5173

### 3. 빌드

```bash
pnpm build
```

### 4. 린트

```bash
pnpm lint
```

## 📚 프로젝트 설명

### example/
참고용 예시 프로젝트입니다. 구조와 구현 방식을 참고하되, **절대 복사하지 마세요**.

**포함 내용**:
- TODO 관리 앱의 완전한 구현
- 컴포넌트 구조 및 디자인 시스템
- LocalStorage 헬퍼 함수
- Day.js 날짜 유틸리티
- TypeScript 타입 정의
- 과제 요구사항 상세 문서 (example/README.md)

## 📦 공통 의존성

모든 프로젝트가 공유하는 의존성:

```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "dayjs": "^1.11.19",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.6"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
```

## 🎨 디자인 시스템

모든 프로젝트는 동일한 디자인 토큰을 사용합니다 (`src/styles/theme.ts`):

- **색상**: Primary (Blue), Success (Green), Danger (Red)
- **간격**: 8px 기본 단위 (xs ~ 4xl)
- **폰트 크기**: 12px ~ 28px
- **Border Radius**: 6px ~ 12px
- **Shadows**: sm, md, lg
- **Transitions**: fast (0.15s), normal (0.2s), slow (0.3s)

## ✅ 제출 전 체크리스트

- [ ] 3개 페이지 모두 정상 동작
- [ ] TODO 추가 기능 (LocalStorage 저장)
- [ ] TODO 목록 조회 (LocalStorage 읽기)
- [ ] 완료 토글 기능
- [ ] 삭제 기능
- [ ] Day.js로 날짜 포맷팅
- [ ] 새로고침 후 데이터 유지
- [ ] TypeScript 타입 정의 (any 최소화)
- [ ] @emotion/react & @emotion/styled 사용
- [ ] ESLint 에러 0개
- [ ] README.md 작성 (프로젝트 설명, 실행 방법)

## 📖 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [Emotion 공식 문서](https://emotion.sh/)
- [React Router 공식 문서](https://reactrouter.com/)
- [Day.js 공식 문서](https://day.js.org/)
- [Vite 공식 문서](https://vitejs.dev/)

## 📝 라이선스

MIT

---

**ㅍㅇㅌ**
