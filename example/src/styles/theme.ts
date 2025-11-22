export const colors = {
  primary: '#3b82f6',
  primaryHover: '#2563eb',

  secondary: '#64748b',
  secondaryHover: '#475569',

  danger: '#dc2626',
  dangerHover: '#b91c1c',

  success: '#10b981',
  successBg: '#d1fae5',
  successText: '#065f46',

  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#6b7280',
  textDisabled: '#9ca3af',

  bgPrimary: '#ffffff',
  bgSecondary: '#f9fafb',
  bgTertiary: '#f3f4f6',

  border: '#e5e7eb',
  borderHover: '#d1d5db',
  borderFocus: '#3b82f6',
  borderError: '#dc2626',
} as const;

export const fontSizes = {
  xs: '12px',
  sm: '13px',
  base: '14px',
  md: '15px',
  lg: '16px',
  xl: '18px',
  '2xl': '24px',
  '3xl': '28px',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const spacing = {
  xs: '6px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
} as const;

export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '12px',
} as const;

export const transitions = {
  fast: 'all 0.15s',
  normal: 'all 0.2s',
  slow: 'all 0.3s',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 4px 12px rgba(0, 0, 0, 0.15)',
  lg: '0 10px 24px rgba(0, 0, 0, 0.2)',
} as const;

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  borderRadius,
  transitions,
  shadows,
} as const;

export type Theme = typeof theme;
