import { theme } from '../styles/theme';

export type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;

export const getGapValue = (gap: Gap): string => {
  if (typeof gap === 'number') {
    return `${gap}px`;
  }
  return theme.spacing[gap];
};
