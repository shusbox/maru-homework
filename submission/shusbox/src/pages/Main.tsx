import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Text, Row, Stack } from "../components/atoms/index";
import { theme } from '../styles/theme';
import { Header } from "../components/layout/index";
import { getBookmarks, deleteBoomark } from '../utils/storage';
import type { Bookmark } from '../types';

interface Card  {
  id: string;
  title?: string;
  url: string;
  date: string;
};

const Main = () => {
  const [ bookmarks, setBookmarks ] = useState<Bookmark[]>(() => getBookmarks());

  const Card = ({ id, title, url, date }: Card) => {
    return (
      <StyledMainCard justify="space-between">
        <Stack>
          {title && <Text as="h2" variant="heading2"> {title} </Text>}
          <Text as="p" variant="body"> {url} </Text>
          <Text as="p" variant="caption"> {date} </Text>
        </Stack>
        <Row>
          <StyledMainCardButton onClick={() => window.open(url)}> 열기 </StyledMainCardButton>
          <StyledMainCardDeleteButton
            onClick={() => {
              const updated = deleteBoomark(id);
              setBookmarks(updated);
            }}
          >
            삭제
          </StyledMainCardDeleteButton>
        </Row>
      </StyledMainCard>
    );
  };

  return (
    <StyledMain>
      <Header />
      <StyledMainMain gap="3xl">
        <Row justify="space-between">          
          <Row>
            <StyledStatistics align="center">
              <Text as="p" variant="body"> 전체 </Text>
              <Text as="h3" variant="heading1"> {bookmarks.length} </Text>
            </StyledStatistics>
            <StyledStatistics align="center">
              <Text as="p" variant="body"> 중요 </Text>
              <Text as="h3" variant="heading1"> 0 </Text>
            </StyledStatistics>
          </Row>
          <Link to="/create">
            <StyledMainButton> 새 북마크 추가 </StyledMainButton>
          </Link>
        </Row>
        <Stack>
          {bookmarks.length === 0 ?
            <StyledMainBookMarkContainer justify="center">
              <Text as="h3" variant="bodyLarge" color="tertiary"> 아직 북마크가 없습니다. 새로운 북마크를 추가해보세요! </Text>
            </StyledMainBookMarkContainer> :
            bookmarks.map(bookmark => (
              <Card
                key={bookmark.id}
                id={bookmark.id}
                title={bookmark.title}
                url={bookmark.url}
                date={bookmark.createdAt}
              />
            ))
          }
        </Stack>
      </StyledMainMain>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  height: 100vh;
  background-color: ${theme.colors.bgSecondary};
`;

const StyledMainMain = styled(Stack)`
  padding: 40px 120px;
`;

const StyledStatistics = styled(Stack)`
  padding: 16px;
  width: 120px;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.bgPrimary};
`;

const StyledMainButton = styled.button`
  padding: 10px 16px;
  color: ${theme.colors.textDisabled};
  font-size: 14px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.primary};
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  };
`;

const StyledMainBookMarkContainer = styled(Row)`
  width: 100%;
  height: 180px;
  border: 1px dashed ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  background-color: ${theme.colors.bgPrimary};
`;

const StyledMainCard = styled(Row)`
  padding: 20px;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.bgPrimary};
  transition: ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const StyledMainCardButton = styled.button`
  padding: 10px 16px;
  color: ${theme.colors.textDisabled};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.primary};
`;

const StyledMainCardDeleteButton = styled.button`
  padding: 10px 16px;
  color: ${theme.colors.textDisabled};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.danger};
`;

export default Main;