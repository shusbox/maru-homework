import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Text, Row } from "../atoms/index";
import { theme } from '../../styles/theme';

export const Header = ({ title = "BookMark Manager" }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLink to="/">
        <Text as="h1" variant="heading1"> {title} </Text>
      </StyledHeaderLink>
      <Row>
        <StyledHeaderLink to="/">
          <StyledHeaderItem> <Text as="p" weight="medium" color="tertiary"> 메인 </Text> </StyledHeaderItem>
        </StyledHeaderLink>
        <StyledHeaderLink to="/create">
          <StyledHeaderItem> <Text as="p" weight="medium" color="tertiary"> 추가하기 </Text> </StyledHeaderItem>
        </StyledHeaderLink>
        <StyledHeaderLink to="/about">
          <StyledHeaderItem> <Text as="p" weight="medium" color="tertiary"> 소개 </Text> </StyledHeaderItem>
        </StyledHeaderLink>
      </Row>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  padding: 20px 120px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.bgPrimary};
  box-sizing: border-box;
`;

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
`;

const StyledHeaderItem = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.bgPrimary};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.bgTertiary};
  }
`;