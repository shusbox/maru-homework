import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Label, Stack, Text } from '.';
import type { TextareaHTMLAttributes, ReactElement } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  minHeight?: number;
}

const TextArea = ({ label, error, minHeight = 120, ...props }: TextAreaProps): ReactElement => {
  return (
    <Stack gap="xs" fullWidth>
      {label && <Label>{label}</Label>}
      <StyledTextArea hasError={!!error} minHeight={minHeight} {...props} />
      {error && (
        <Text variant="captionSmall" color="primary" style={{ color: theme.colors.danger }}>
          {error}
        </Text>
      )}
    </Stack>
  );
};

export { TextArea };

const StyledTextArea = styled.textarea<{ hasError: boolean; minHeight: number }>`
  padding: 10px 14px;
  border: 1px solid
    ${({ hasError }) => (hasError ? theme.colors.borderError : theme.colors.borderHover)};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.base};
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: ${({ minHeight }) => minHeight}px;
  transition: ${theme.transitions.normal};

  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? theme.colors.borderError : theme.colors.borderFocus};
  }
`;
