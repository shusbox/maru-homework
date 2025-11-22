import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Row } from '../atoms';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Row as="nav" gap="sm">
      <StyledNavLink to="/" isActive={location.pathname === '/'}>
        메인
      </StyledNavLink>
      <StyledNavLink to="/create" isActive={location.pathname === '/create'}>
        추가하기
      </StyledNavLink>
      <StyledNavLink to="/about" isActive={location.pathname === '/about'}>
        소개
      </StyledNavLink>
    </Row>
  );
};

export { Navigation };

const StyledNavLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? theme.colors.primary : theme.colors.textTertiary)};
  font-weight: ${({ isActive }) => (isActive ? theme.fontWeights.semibold : theme.fontWeights.medium)};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bgTertiary};
  }
`;
