import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import type { HTMLAttributes, ReactElement } from 'react';

type TextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body'
  | 'bodyLarge'
  | 'md'
  | 'caption'
  | 'captionSmall';

type TextColor = 'primary' | 'secondary' | 'tertiary' | 'disabled';

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  color?: TextColor;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const Text = ({
  variant = 'body',
  color = 'primary',
  weight,
  as,
  children,
  ...props
}: TextProps): ReactElement => {
  return (
    <StyledText variant={variant} color={color} weight={weight} as={as} {...props}>
      {children}
    </StyledText>
  );
};

export { Text };

const getVariantStyles = (variant: TextVariant) => {
  switch (variant) {
    case 'heading1':
      return `
        font-size: ${theme.fontSizes['2xl']};
        font-weight: ${theme.fontWeights.bold};
        line-height: 1.2;
      `;
    case 'heading2':
      return `
        font-size: ${theme.fontSizes.xl};
        font-weight: ${theme.fontWeights.semibold};
        line-height: 1.3;
      `;
    case 'heading3':
      return `
        font-size: ${theme.fontSizes.lg};
        font-weight: ${theme.fontWeights.semibold};
        line-height: 1.4;
      `;
    case 'bodyLarge':
      return `
        font-size: ${theme.fontSizes.lg};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.6;
      `;
    case 'md':
      return `
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.5;
      `;
    case 'body':
      return `
        font-size: ${theme.fontSizes.base};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.5;
      `;
    case 'caption':
      return `
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.4;
      `;
    case 'captionSmall':
      return `
        font-size: ${theme.fontSizes.xs};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.3;
      `;
    default:
      return `
        font-size: ${theme.fontSizes.base};
        font-weight: ${theme.fontWeights.regular};
        line-height: 1.5;
      `;
  }
};

const getColorStyles = (color: TextColor) => {
  switch (color) {
    case 'primary':
      return theme.colors.textPrimary;
    case 'secondary':
      return theme.colors.textSecondary;
    case 'tertiary':
      return theme.colors.textTertiary;
    case 'disabled':
      return theme.colors.textDisabled;
    default:
      return theme.colors.textPrimary;
  }
};

const StyledText = styled.span<{
  variant: TextVariant;
  color: TextColor;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}>`
  margin: 0;
  padding: 0;
  ${({ variant }) => getVariantStyles(variant)}
  color: ${({ color }) => getColorStyles(color)};
  ${({ weight }) => weight && `font-weight: ${theme.fontWeights[weight]};`}
`;
