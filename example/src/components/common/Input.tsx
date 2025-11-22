import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Label, Stack, Text } from '../atoms';
import type { InputHTMLAttributes, ReactElement } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps): ReactElement => {
  return (
    <Stack gap="xs" fullWidth>
      {label && <Label>{label}</Label>}
      <StyledInput hasError={!!error} {...props} />
      {error && <Text variant="captionSmall" color="primary" style={{ color: theme.colors.danger }}>{error}</Text>}
    </Stack>
  );
};

export { Input };

const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 10px 14px;
  border: 1px solid ${({ hasError }) => (hasError ? theme.colors.borderError : theme.colors.borderHover)};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.base};
  outline: none;
  transition: ${theme.transitions.normal};

  &:focus {
    border-color: ${({ hasError }) => (hasError ? theme.colors.borderError : theme.colors.borderFocus)};
  }
`;
