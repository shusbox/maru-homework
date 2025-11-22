# Example Project - TODO 관리 앱

이 프로젝트는 **과제 요구사항의 참고 자료**입니다.
구조와 구현 방식을 참고하되, **절대 복사하지 마세요**.

## ⚠️ 중요 안내

- 이 예시는 "TODO 관리" 주제로 구현되어 있습니다
- 구조와 패턴을 이해하고 자신의 스타일로 구현해주세요

---

## 🎯 과제 요구사항

### 필수 기술 스택
- **React** 19+
- **TypeScript** 5+
- **@emotion/react** (CSS-in-JS)
- **React Router** 6+
- **Day.js** (날짜 포맷팅)
- **Vite** (빌드 도구)

### 필수 조건
- ✅ **Day.js 사용 필수**: 날짜 표시 및 포맷팅에 Day.js 사용
- ✅ **LocalStorage 사용**: 데이터 영구 저장
- ✅ **TypeScript**: any 사용 최소화
- ✅ **Emotion**: 모든 스타일링은 Emotion으로
- ✅ **데스크탑 전용**: 반응형 불필요 (최소 1024px)
- ✅ **ESLint 에러 0개**

### 금지 사항
- ❌ UI 라이브러리 사용 금지 (MUI, Ant Design, shadcn/ui 등)
- ❌ Axios 사용 금지 (LocalStorage만 사용)

---

## 📋 페이지 구성 (총 3개)

### 1. Main Page (`/`)
**역할**: TODO 목록 조회 및 관리 (메인 페이지)

**필수 포함 요소**:
- Header
    - 앱 이름/로고
    - "새 TODO 추가" 버튼 (Create 페이지로 이동)
    - 통계 정보 (전체 개수, 완료 개수 등)
- TODO 목록
    - 테이블 또는 카드 형태로 표시
    - 각 아이템 표시 정보:
        - 제목
        - 완료 여부 (체크박스 또는 토글)
        - 생성 시간 (Day.js로 포맷팅, 예: "2024년 11월 22일 오후 3:30")
        - 액션 버튼 (삭제)
- 상태 표시
    - 빈 목록일 때 안내 메시지
    - 완료된 TODO는 시각적으로 구분 (취소선, 색상 등)
- 완료/미완료 토글 기능
- 삭제 기능

**선택 구현 (가산점)**:
- 완료/미완료 필터 탭
- 검색 기능
- 정렬 (최신순, 오래된순, 가나다순)
- 수정 기능

**Day.js 사용 예시**:
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

**평가 포인트**:
- ✅ useEffect를 통한 데이터 로딩
- ✅ LocalStorage 데이터 읽기
- ✅ 리스트 렌더링
- ✅ 완료 토글 기능
- ✅ 삭제 기능
- ✅ **Day.js 날짜 포맷팅**
- ✅ TypeScript 타입 정의
- ✅ 완료 여부 시각화

---

### 2. Create Page (`/create`)
**역할**: 새로운 TODO 추가

**필수 포함 요소**:
- Header
    - "목록으로" 돌아가기 버튼
- 입력 폼
    - 제목 입력 필드 (Input, 필수)
    - 상세 설명 입력 필드 (Textarea, 선택)
    - 완료 여부 체크박스
    - 추가 버튼
- 폼 검증
    - 제목 필드 빈 값 체크
    - 최소/최대 길이 검증 (선택)
    - 에러 메시지 표시
- 상태 표시
    - 성공 메시지
    - 실패 메시지
- 추가 후 처리
    - 성공 시 폼 초기화
    - 자동으로 메인 페이지로 이동 (선택)

**데이터 구조**:
```typescript
interface Todo {
  id: string;          // Date.now() 또는 crypto.randomUUID()
  title: string;       // 필수
  description?: string; // 선택
  completed: boolean;
  createdAt: string;   // ISO 8601 형식
}
```

**평가 포인트**:
- ✅ 폼 상태 관리 (useState)
- ✅ LocalStorage 쓰기
- ✅ 에러 핸들링
- ✅ TypeScript 타입 정의
- ✅ 유효성 검증
- ✅ 고유 ID 생성
- ✅ **날짜 저장 (ISO 8601 형식)**

---

### 3. About/Info Page (`/about`)
**역할**: 앱 소개 및 사용 가이드

**필수 포함 요소**:
- 앱 소개
    - 서비스 설명
    - 주요 기능 3가지 이상 설명
- 사용 방법
    - 간단한 사용 가이드
- 기술 스택
    - 사용된 기술 목록 표시
- Footer
    - 제작자 정보
    - GitHub 링크
    - 제작 날짜 (Day.js 사용)

**평가 포인트**:
- ✅ Emotion 스타일링
- ✅ 깔끔한 레이아웃
- ✅ **Day.js 날짜 표시**
- ✅ 정보 전달력

---

## 📂 권장 폴더 구조
```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Checkbox.tsx
│   │   └── TodoCard.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Navigation.tsx
├── pages/
│   ├── Main.tsx         # "/" - TODO 목록
│   ├── Create.tsx       # "/create" - TODO 추가
│   └── About.tsx        # "/about" - 앱 소개
├── utils/
│   └── storage.ts       # LocalStorage 헬퍼 함수
├── types/
│   └── index.ts
├── styles/
│   └── theme.ts         # (선택)
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## 💡 구현 가이드

### 1. Day.js 설치 및 설정
```bash
pnpm add dayjs
```
```typescript
// utils/date.ts (선택)
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export const formatDate = (date: string) => {
  return dayjs(date).format('YYYY년 MM월 DD일 A h:mm');
};

export const getRelativeTime = (date: string) => {
  return dayjs(date).fromNow();
};

export const getCurrentDate = () => {
  return new Date().toISOString();
};
```

### 2. LocalStorage 헬퍼 함수
```typescript
// utils/storage.ts
import { Todo } from '../types';

const STORAGE_KEY = 'todos';

export const getTodos = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const addTodo = (todo: Omit<Todo, 'id' | 'createdAt'>): Todo => {
  const todos = getTodos();
  const newTodo: Todo = {
    ...todo,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  saveTodos([...todos, newTodo]);
  return newTodo;
};

export const deleteTodo = (id: string): void => {
  const todos = getTodos();
  saveTodos(todos.filter(todo => todo.id !== id));
};

export const updateTodo = (id: string, updates: Partial<Todo>): void => {
  const todos = getTodos();
  saveTodos(
    todos.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    )
  );
};

export const getTodoStats = () => {
  const todos = getTodos();
  return {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length,
  };
};
```

### 3. 타입 정의
```typescript
// types/index.ts
export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string; // ISO 8601
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  completed: boolean;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}
```

### 4. 라우터 설정
```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Create from './pages/Create';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 5. 완료 여부 스타일링
```typescript
import styled from '@emotion/styled';

const TodoItem = styled.div<{ completed: boolean }>`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.2s;
  
  opacity: ${props => props.completed ? 0.6 : 1};
  background-color: ${props => props.completed ? '#f5f5f5' : '#fff'};
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TodoTitle = styled.h3<{ completed: boolean }>`
  margin: 0 0 8px 0;
  font-size: 18px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? '#999' : '#333'};
`;

const TodoDate = styled.span`
  font-size: 14px;
  color: #666;
`;
```

---

## 🎯 평가 기준

| 항목 | 배점 | 세부 내용 |
|------|------|-----------|
| **기능 구현** | 40점 | - 3개 페이지 정상 동작 (15점)<br>- TODO CRUD 기능 (15점)<br>- Day.js 날짜 포맷팅 (10점) |
| **코드 품질** | 25점 | - TypeScript 타입 정의 (10점)<br>- 컴포넌트 구조 (10점)<br>- 코드 가독성 (5점) |
| **스타일링** | 20점 | - Emotion 활용도 (7점)<br>- 레이아웃 완성도 (7점)<br>- UI/UX (6점) |
| **데이터 관리** | 10점 | - LocalStorage CRUD (5점)<br>- 에러 핸들링 (3점)<br>- 유효성 검증 (2점) |
| **추가 구현** | 5점 | - 선택 기능<br>- 창의성 |

**총점: 100점**

**감점 사항**:
- 예시 코드 복사: 0점 처리
- Day.js 미사용: -15점
- ESLint 에러: -5점
- any 과다 사용: -10점
- UI 라이브러리 사용: -20점

---

## 📋 다른 주제 추천

TODO 대신 구현할 수 있는 주제:

### 1. 북마크 관리자
- URL, 제목, 카테고리, 추가 날짜
- 카테고리별 필터링
- 즐겨찾기 기능

### 2. 일기장
- 날짜, 제목, 내용, 기분(이모지)
- 날짜별 조회
- 기분 통계

### 3. 독서 목록
- 책 제목, 저자, 상태(읽는 중/완료)
- 읽기 시작/완료 날짜
- 독서 통계

### 4. 영화 감상 기록
- 영화 제목, 평점, 감상평
- 관람 날짜
- 평점별 필터

### 5. 운동 기록
- 운동 종류, 시간, 강도
- 운동 날짜
- 주간/월간 통계

---

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

---

## 📝 제출 전 체크리스트

- [ ] 3개 페이지 모두 정상 동작
- [ ] TODO 추가 기능 (LocalStorage 저장)
- [ ] TODO 목록 조회 (LocalStorage 읽기)
- [ ] 완료 토글 기능
- [ ] 삭제 기능
- [ ] **Day.js로 날짜 포맷팅 (필수)**
- [ ] 새로고침 후 데이터 유지
- [ ] TypeScript 타입 정의 (any 최소화)
- [ ] ESLint 에러 0개
- [ ] README.md 작성 (프로젝트 설명, 실행 방법)
- [ ] 예시와 다른 주제로 구현

---

## 🎓 예시에서 배울 수 있는 것

1. 프로젝트 폴더 구조
2. TypeScript 타입 정의
3. Emotion 스타일링 패턴
4. LocalStorage CRUD
5. React Hooks (useState, useEffect)
6. Day.js 날짜 처리
7. 폼 처리 및 검증
8. React Router 사용법

---

**다른 주제로 창의적인 프로젝트를 만들어보세요! 🚀**

Good luck! 💪