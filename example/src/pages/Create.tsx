import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout';
import { Input, Checkbox, Button } from '../components/common';
import { Text, Stack, Row, TextArea } from '../components/atoms';
import { addTodo } from '../utils/storage';

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      navigate('/');
    }, 1500);

    return () => clearTimeout(timer);
  }, [showSuccess, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === '') {
      setTitleError('제목은 필수 입력 항목입니다.');
      return;
    }

    if (title.trim().length < 2) {
      setTitleError('제목은 최소 2자 이상이어야 합니다.');
      return;
    }

    if (title.trim().length > 100) {
      setTitleError('제목은 최대 100자까지 입력 가능합니다.');
      return;
    }

    setTitleError('');

    addTodo({
      title: title.trim(),
      description: description.trim() || undefined,
      completed,
    });

    setShowSuccess(true);

    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <StyledContainer>
      <Header />
      <StyledContent>
        <StyledFormCard>
          <Text as="h2" variant="heading1">
            새 TODO 추가
          </Text>

          {showSuccess && (
            <StyledSuccessMessage>
              ✅ TODO가 성공적으로 추가되었습니다!
            </StyledSuccessMessage>
          )}

          <Stack as="form" gap="2xl" onSubmit={handleSubmit}>
            <Input
              label="제목 *"
              placeholder="할 일을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={titleError}
              maxLength={100}
            />

            <TextArea
              label="상세 설명"
              placeholder="상세한 설명을 입력하세요 (선택)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={500}
            />

            <Checkbox
              label="완료된 TODO로 추가"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />

            <Row gap="md" justify="flex-end" style={{ marginTop: theme.spacing.lg }}>
              <Button type="button" variant="secondary" onClick={() => navigate('/')}>
                취소
              </Button>
              <Button type="submit">추가하기</Button>
            </Row>
          </Stack>
        </StyledFormCard>
      </StyledContent>
    </StyledContainer>
  );
};

export default Create;

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.bgSecondary};
`;

const StyledContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing['4xl']} ${theme.spacing['4xl']};
`;

const StyledFormCard = styled(Stack)`
  background-color: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['4xl']};
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  gap: ${theme.spacing['3xl']};
`;

const StyledSuccessMessage = styled.div`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background-color: ${theme.colors.successBg};
  color: ${theme.colors.successText};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.base};
`;
