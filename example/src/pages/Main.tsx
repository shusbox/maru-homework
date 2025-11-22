import { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout';
import { TodoCard, Button } from '../components/common';
import { Text, Stack, Row } from '../components/atoms';
import { getTodos, updateTodo, deleteTodo, calculateStats } from '../utils/storage';
import type { Todo } from '../types';

const Main = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>(() => getTodos());

  const handleToggle = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      const updatedTodos = updateTodo(id, { completed: !todo.completed });
      setTodos(updatedTodos);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updatedTodos = deleteTodo(id);
      setTodos(updatedTodos);
    }
  };

  const stats = useMemo(() => calculateStats(todos), [todos]);

  return (
    <StyledContainer>
      <Header />
      <StyledContent>
        <Row justify="space-between" align="center" style={{ marginBottom: theme.spacing['3xl'] }}>
          <Row gap="lg">
            <StyledStatItem>
              <Text variant="caption" color="tertiary" weight="medium">
                전체
              </Text>
              <Text variant="heading1" weight="bold">
                {stats.total}
              </Text>
            </StyledStatItem>
            <StyledStatItem>
              <Text variant="caption" color="tertiary" weight="medium">
                완료
              </Text>
              <Text variant="heading1" weight="bold">
                {stats.completed}
              </Text>
            </StyledStatItem>
            <StyledStatItem>
              <Text variant="caption" color="tertiary" weight="medium">
                미완료
              </Text>
              <Text variant="heading1" weight="bold">
                {stats.pending}
              </Text>
            </StyledStatItem>
          </Row>
          <Button onClick={() => navigate('/create')}>새 TODO 추가</Button>
        </Row>

        <Stack gap="sm">
          {todos.length === 0 ? (
            <StyledEmptyMessage>
              아직 TODO가 없습니다. 새로운 TODO를 추가해보세요!
            </StyledEmptyMessage>
          ) : (
            todos.map(todo => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </Stack>
      </StyledContent>
    </StyledContainer>
  );
};

export default Main;

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.bgSecondary};
`;

const StyledContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing['4xl']} ${theme.spacing['4xl']};
`;

const StyledStatItem = styled(Stack)`
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xl} 28px;
  background-color: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  min-width: 110px;
  transition: ${theme.transitions.normal};
  border: 1px solid ${theme.colors.border};
  gap: ${theme.spacing.xs};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const StyledEmptyMessage = styled.div`
  text-align: center;
  padding: 80px ${theme.spacing.xl};
  color: ${theme.colors.textDisabled};
  font-size: ${theme.fontSizes.lg};
  background-color: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  border: 2px dashed ${theme.colors.border};
`;
