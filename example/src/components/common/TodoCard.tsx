import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Text, Stack, Row } from '../atoms';
import type { Todo } from '../../types';
import { getRelativeTime } from '../../utils/date';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

interface TodoCardProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoCard = ({ todo, onToggle, onDelete }: TodoCardProps) => {
  return (
    <StyledCard completed={todo.completed}>
      <Row justify="space-between" align="flex-start" gap="md">
        <Stack gap="sm" fullWidth>
          <Text
            as="h3"
            variant="heading2"
            color={todo.completed ? 'tertiary' : 'primary'}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </Text>
          {todo.description && (
            <Text variant="body" color={todo.completed ? 'disabled' : 'secondary'}>
              {todo.description}
            </Text>
          )}
          <Text variant="caption" color="tertiary">
            {getRelativeTime(todo.createdAt)}
          </Text>
        </Stack>
        <StyledActionsRow gap="sm" align="center">
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            label={todo.completed ? '완료됨' : '미완료'}
          />
          <Button variant="danger" onClick={() => onDelete(todo.id)}>
            삭제
          </Button>
        </StyledActionsRow>
      </Row>
    </StyledCard>
  );
};

export { TodoCard };

const StyledCard = styled.div<{ completed: boolean }>`
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.md};
  transition: ${theme.transitions.normal};
  background-color: ${({ completed }) => (completed ? theme.colors.bgSecondary : theme.colors.bgPrimary)};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
  box-shadow: ${theme.shadows.sm};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const StyledActionsRow = styled(Row)`
  flex-shrink: 0;
  white-space: nowrap;
`;
