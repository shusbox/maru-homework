import styled from '@emotion/styled';
import type { HTMLAttributes, ElementType, ReactElement } from 'react';
import { getGapValue, type Gap } from '../../utils/spacing';

type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  fullWidth?: boolean;
  wrap?: boolean;
}

const Row = ({
  gap = 'md',
  align = 'center',
  justify = 'flex-start',
  fullWidth = false,
  wrap = false,
  children,
  ...props
}: RowProps): ReactElement => {
  return (
    <StyledRow gap={gap} align={align} justify={justify} fullWidth={fullWidth} wrap={wrap} {...props}>
      {children}
    </StyledRow>
  );
};

export { Row };

const StyledRow = styled.div<{
  gap: Gap;
  align: Align;
  justify: Justify;
  fullWidth: boolean;
  wrap: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => getGapValue(gap)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
