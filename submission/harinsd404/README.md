# TODO 관리 앱

React + TypeScript + Emotion으로 구현한 TODO 관리 웹 애플리케이션입니다.

## 🎯 프로젝트 소개

일상의 할 일을 효율적으로 관리할 수 있는 TODO 관리 앱입니다.
간단한 인터페이스로 할 일을 추가하고, 완료 여부를 관리하며, 통계를 확인할 수 있습니다.

### 주요 기능

- ✅ TODO 추가, 조회, 수정, 삭제 (CRUD)
- 📋 완료/미완료 상태 관리
- 📊 통계 정보 (전체, 완료, 미완료 개수)
- 📅 Day.js를 활용한 생성 날짜 표시
- 💾 LocalStorage 기반 데이터 영구 저장
- 🔍 검색 및 필터링 기능

## 🛠️ 기술 스택

- **React** 19.2.0
- **TypeScript** 5.9.3
- **@emotion/react** 11.14.0
- **@emotion/styled** 11.14.1 (CSS-in-JS)
- **React Router** 7.9.6
- **Day.js** 1.11.19
- **Vite** 7.2.4

## 📂 프로젝트 구조

```
src/
├── components/
│   ├── atoms/           # 기본 컴포넌트 (Stack, Row, Text)
│   ├── common/          # 공통 컴포넌트 (Button, Input, Checkbox)
│   └── layout/          # 레이아웃 컴포넌트 (Header, Navigation)
├── pages/
│   ├── Main.tsx         # "/" - TODO 목록
│   ├── Create.tsx       # "/create" - TODO 추가
│   └── About.tsx        # "/about" - 앱 소개
├── utils/
│   ├── storage.ts       # LocalStorage 헬퍼
│   ├── date.ts          # Day.js 날짜 유틸리티
│   └── spacing.ts       # 간격 유틸리티
├── types/
│   └── index.ts         # TypeScript 타입 정의
├── styles/
│   └── theme.ts         # 디자인 시스템 테마
├── App.tsx
└── main.tsx
```

## 📋 페이지 구성

### 1. Main Page (`/`)
TODO 목록을 조회하고 관리하는 메인 페이지

**기능**:
- TODO 목록 카드/테이블 형태로 표시
- 완료 여부 체크박스로 토글
- TODO 삭제 기능
- 완료/미완료 필터링
- 검색 기능
- 통계 정보 표시 (전체, 완료, 미완료 개수)

**표시 정보**:
- 제목
- 상세 설명 (있는 경우)
- 완료 여부 (체크박스)
- 생성 날짜 (Day.js 포맷: "2024년 11월 22일 오후 3:30")
- 삭제 버튼

**스타일**:
- 완료된 TODO는 취소선, 색상 변경으로 시각적 구분
- 빈 목록일 때 안내 메시지

### 2. Create Page (`/create`)
새로운 TODO를 추가하는 페이지

**입력 필드**:
- 제목 (필수, Input)
- 상세 설명 (선택, Textarea)
- 완료 여부 (체크박스)

**검증 규칙**:
- 제목 필수 입력
- 제목 최소/최대 길이 검증
- 에러 메시지 표시

**추가 후 처리**:
- 성공 메시지 표시
- 폼 초기화
- 메인 페이지로 자동 이동 (선택)

### 3. About Page (`/about`)
앱 소개 및 사용 가이드

**포함 내용**:
- 서비스 소개 및 설명
- 주요 기능 3가지 이상 설명
- 사용 방법 가이드
- 기술 스택 표시
- 제작자 정보 (GitHub 링크)
- 제작 날짜 (Day.js)

## 💾 데이터 구조

```typescript
interface Todo {
  id: string;          // Date.now() 또는 crypto.randomUUID()
  title: string;       // 필수
  description?: string; // 선택
  completed: boolean;
  createdAt: string;   // ISO 8601 형식
}

interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}
```

## 🚀 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:5173)
pnpm dev

# 빌드
pnpm build

# 프리뷰
pnpm preview

# 린트
pnpm lint
```

## 💡 주요 구현 사항

### Day.js 날짜 포맷팅
```typescript
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

// 예시: "2024년 11월 22일 오후 3:30"
const formatted = dayjs(todo.createdAt).format('YYYY년 MM월 DD일 A h:mm');

// 예시: "3분 전", "2시간 전"
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const relative = dayjs(todo.createdAt).fromNow();
```

### LocalStorage 데이터 관리
- getTodos(): 모든 TODO 조회
- addTodo(): 새 TODO 추가
- updateTodo(): TODO 수정
- deleteTodo(): TODO 삭제
- getTodoStats(): 통계 정보 조회

## ✅ 구현 체크리스트

- [x] 프로젝트 초기 설정 (Vite + React + TypeScript)
- [x] 기본 컴포넌트 구조 (atoms, common, layout)
- [x] 테마 시스템 (theme.ts)
- [x] 라우팅 설정 (React Router)
- [ ] TODO CRUD 기능
- [ ] LocalStorage 연동
- [ ] Day.js 날짜 포맷팅
- [ ] 완료 상태 토글
- [ ] 필터링 기능 (전체/완료/미완료)
- [ ] 검색 기능
- [ ] 통계 정보 표시
- [ ] 폼 유효성 검증
- [ ] 완료 TODO 시각적 구분
- [ ] ESLint 에러 해결
- [ ] TypeScript any 제거

## 🎨 디자인 가이드

- **색상**:
  - Primary: #3b82f6 (Blue)
  - Success: #10b981 (Green)
  - Danger: #dc2626 (Red)
  - Text: #111827 (Primary), #6b7280 (Tertiary)
- **간격**: 8px 기본 단위 (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- **폰트 크기**: 12px ~ 28px
- **Border Radius**: 6px ~ 12px
- **컴포넌트**: Emotion styled components 사용

## 📝 필수 요구사항

- ✅ Day.js 사용 필수 (날짜 포맷팅)
- ✅ LocalStorage 사용 (데이터 영구 저장)
- ✅ TypeScript strict 모드 (any 최소화)
- ✅ Emotion 스타일링
- ✅ 데스크탑 전용 (최소 1024px)
- ✅ ESLint 에러 0개
- ❌ UI 라이브러리 사용 금지
- ❌ Axios 사용 금지

## 👤 제작자

**harinsd404**
- GitHub: https://github.com/harinsd404
- 제작 날짜: 2025년 1월

---

**Built with ❤️ using React + TypeScript + Emotion**
