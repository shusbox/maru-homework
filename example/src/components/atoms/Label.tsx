import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import type { LabelHTMLAttributes, ReactElement } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = ({ required, children, ...props }: LabelProps): ReactElement => {
  return (
    <StyledLabel {...props}>
      {children}
      {required && <StyledRequired>*</StyledRequired>}
    </StyledLabel>
  );
};

export { Label };

const StyledLabel = styled.label`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  user-select: none;
`;

const StyledRequired = styled.span`
  color: ${theme.colors.danger};
  margin-left: 4px;
`;
