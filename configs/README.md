# Shared Configuration Files

모든 프로젝트에서 공통으로 사용하는 설정 파일들을 중앙에서 관리합니다.

## 파일 목록

- **eslint.config.js** - ESLint 설정 (React, TypeScript)
- **tsconfig.base.json** - TypeScript 베이스 설정
- **tsconfig.app.json** - TypeScript 애플리케이션 설정
- **tsconfig.node.json** - TypeScript Node 환경 설정
- **vite.config.ts** - Vite 빌드 도구 설정

## 사용 방법

각 프로젝트에서는 `extends` 또는 `export`를 통해 이 설정들을 참조합니다:

### TypeScript 설정
```json
{
  "extends": "../configs/tsconfig.base.json"
}
```

### ESLint & Vite 설정
```js
export { default } from '../configs/eslint.config.js'
```

## 프로젝트별 경로

- `example/` → `../configs/`
- `submission/harinsd404/` → `../../configs/`
- `submission/shusbox/` → `../../configs/`

## 장점

- 설정 파일 중복 제거
- 일관된 설정 유지
- 중앙집중식 관리로 유지보수 용이
- 새 프로젝트 추가 시 빠른 설정
