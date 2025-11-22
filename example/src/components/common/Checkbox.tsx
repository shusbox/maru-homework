import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Label, Row } from '../atoms';
import { useId } from 'react';
import type { InputHTMLAttributes, ReactElement } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = ({ label, id, ...props }: CheckboxProps): ReactElement => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <Row gap="sm" align="center">
      <StyledCheckbox type="checkbox" id={checkboxId} {...props} />
      {label && <Label htmlFor={checkboxId}>{label}</Label>}
    </Row>
  );
};

export { Checkbox };

const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${theme.colors.primary};
`;
