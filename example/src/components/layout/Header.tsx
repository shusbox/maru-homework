import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Text, Row } from '../atoms';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = 'Todo Manager' }: HeaderProps) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderContent>
        <StyledLogoLink to="/">
          <Text as="h1" variant="heading1">
            {title}
          </Text>
        </StyledLogoLink>
        <Navigation />
      </StyledHeaderContent>
    </StyledHeaderContainer>
  );
};

export { Header };

const StyledHeaderContainer = styled.header`
  background-color: ${theme.colors.bgPrimary};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.xl} ${theme.spacing['4xl']};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledHeaderContent = styled(Row)`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
