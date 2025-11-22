import styled from '@emotion/styled';
import type { HTMLAttributes, ElementType, ReactElement } from 'react';
import { getGapValue, type Gap } from '../../utils/spacing';

type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch';
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  fullWidth?: boolean;
}

const Stack = ({
  gap = 'md',
  align = 'stretch',
  justify = 'flex-start',
  fullWidth = false,
  children,
  ...props
}: StackProps): ReactElement => {
  return (
    <StyledStack gap={gap} align={align} justify={justify} fullWidth={fullWidth} {...props}>
      {children}
    </StyledStack>
  );
};

export { Stack };

const StyledStack = styled.div<{
  gap: Gap;
  align: Align;
  justify: Justify;
  fullWidth: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => getGapValue(gap)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;
