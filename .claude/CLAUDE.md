# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for a React TODO management app homework assignment using pnpm workspaces. It contains:

- **example/**: Reference implementation (DO NOT modify)
- **submission/harinsd404/**: harinsd404's submission project
- **submission/shusbox/**: shusbox's submission project
- **configs/**: Centralized configuration files shared across all projects

## Monorepo Architecture

### pnpm Workspace Structure
All projects share dependencies via pnpm workspaces. Root package.json defines workspace-wide scripts:

```bash
# Run dev server for specific project
pnpm --filter example dev
pnpm --filter harinsd404 dev
pnpm --filter shusbox dev

# Run all projects in parallel
pnpm -r --parallel dev

# Build/lint all projects
pnpm -r build
pnpm -r lint
```

### Per-Project Commands
Within each project directory (example/, submission/harinsd404/, submission/shusbox/):

```bash
pnpm dev          # Start Vite dev server (http://localhost:5173)
pnpm build        # TypeScript compilation + Vite build
pnpm lint         # ESLint check
pnpm preview      # Preview production build
```

## Centralized Configuration System

**Critical**: All configuration files live in `configs/` directory and are referenced by projects using:
- **TypeScript configs**: `extends` pattern
- **ESLint/Vite configs**: ES6 `export { default }` pattern

### Configuration Files in configs/
- `tsconfig.base.json` - Root TypeScript config with references
- `tsconfig.app.json` - Application code settings (strict mode, React JSX)
- `tsconfig.node.json` - Node environment settings (Vite config files)
- `eslint.config.js` - ESLint with React hooks and TypeScript rules
- `vite.config.ts` - Vite build configuration with React plugin

### How Projects Reference Configs

**TypeScript** (tsconfig.json):
```json
{
  "extends": "../../configs/tsconfig.base.json"
}
```

**ESLint** (eslint.config.js):
```javascript
export { default } from '../../configs/eslint.config.js'
```

**Vite** (vite.config.ts):
```typescript
export { default } from '../../configs/vite.config'
```

**When modifying configs**: Edit files in `configs/` directory, NOT in individual projects.

## Required Technology Stack

All submission projects MUST use:
- React 19.2.0
- TypeScript 5.9.3 (strict mode, no `any` usage)
- @emotion/react 11.14.0 AND @emotion/styled 11.14.1 (both required for CSS-in-JS)
- React Router 7.9.6
- Day.js 1.11.19 (required for date formatting)
- Vite 7.2.4
- LocalStorage for data persistence

**Prohibited**:
- UI libraries (MUI, Ant Design, shadcn/ui)
- Axios (use LocalStorage only)

## Component Architecture

### Atomic Design Pattern
Projects follow atomic design with three-tier component structure:

```
src/components/
├── atoms/          # Base building blocks (Stack, Row, Text)
├── common/         # Reusable UI components (Button, Input, Checkbox)
└── layout/         # Layout components (Header, Navigation)
```

### Core Atom Components

**Stack** (`components/atoms/Stack.tsx`):
- Vertical flex container with gap, alignment, and justify props
- Uses `getGapValue()` utility for consistent spacing

**Row** (`components/atoms/Row.tsx`):
- Horizontal flex container with optional wrap support
- Same prop interface as Stack

**Text** (`components/atoms/Text.tsx`):
- Typography component with variants: heading1-3, body, caption, label, code
- Color props: primary, secondary, tertiary, disabled, danger, success
- Implements theme-based font sizes and weights

### Design System (`src/styles/theme.ts`)

All styling must use centralized theme tokens:

```typescript
theme.colors       // primary, success, danger, text colors
theme.spacing      // xs, sm, md, lg, xl, 2xl, 3xl, 4xl (8px base unit)
theme.fontSizes    // xs (12px) → 2xl (28px)
theme.fontWeights  // normal, medium, semibold, bold
theme.borderRadius // sm (6px), md (8px), lg (12px)
theme.shadows      // sm, md, lg
theme.transitions  // fast (0.15s), normal (0.2s), slow (0.3s)
```

### Spacing Utility (`src/utils/spacing.ts`)

`getGapValue(gap: Gap)` function converts theme spacing tokens or numbers to CSS values:
```typescript
getGapValue('md')  // Returns '12px' from theme
getGapValue(16)    // Returns '16px' for custom values
```

## Project Requirements

### Page Structure (3 Required Pages)
1. **Main Page** (`/`) - TODO list with filtering, search, stats
2. **Create Page** (`/create`) - Form to add new TODOs
3. **About Page** (`/about`) - App introduction and guide

### Data Structure
```typescript
interface Todo {
  id: string;          // Date.now() or crypto.randomUUID()
  title: string;       // Required
  description?: string; // Optional
  completed: boolean;
  createdAt: string;   // ISO 8601 format
}
```

### Day.js Usage (Mandatory)
- Date formatting: `dayjs(date).format('YYYY년 MM월 DD일 A h:mm')`
- Relative time: `dayjs(date).fromNow()` with relativeTime plugin
- Korean locale: `dayjs.locale('ko')`

### Quality Requirements
- ESLint errors: 0 (must pass `pnpm lint`)
- TypeScript: Strict mode, minimize `any` usage
- Desktop-only: Minimum 1024px width (no responsive design needed)
- LocalStorage: Data must persist across page refreshes

## Development Workflow

### Starting New Work
1. Navigate to specific project: `cd submission/harinsd404` or `cd submission/shusbox`
2. Install dependencies: `pnpm install` (from project root)
3. Start dev server: `pnpm dev`
4. Open browser: http://localhost:5173

### Before Committing
1. Run linter: `pnpm lint` (must have 0 errors)
2. Build check: `pnpm build` (TypeScript compilation must succeed)
3. Verify LocalStorage persistence by refreshing browser

### When Adding Dependencies
Add to root package.json if shared across projects, or to individual project's package.json if project-specific. Run `pnpm install` from repository root.

## Important Notes

- **example/ is read-only**: Use as reference, never modify
- **Config centralization**: Always edit configs in `configs/`, not in projects
- **Both Emotion packages required**: @emotion/react AND @emotion/styled must be used
- **Day.js is mandatory**: Use for all date formatting, not built-in Date methods
- **LocalStorage only**: No API calls, no Axios, all data persistence via LocalStorage
