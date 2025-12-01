import { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Text, Row, Stack } from "../components/atoms/index";
import { Header } from "../components/layout/index";
import { addBookmark } from '../utils/storage';

const Create = () => {
  const navigate = useNavigate();
  const [ important, setImportant ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');

  const Success = () => {
    return (
      <StyledCreateSuccess>
        <Text as="p" variant="body"> ✅ 북마크가 성공적으로 추가되었습니다! </Text>
      </StyledCreateSuccess>
    );
  };

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (url === '') {
      return;
    };

    addBookmark({
      title: title,
      url: url,
      important,
    });

    setTitle('');
    setUrl('');
    setImportant(false);

    navigate("/");
  };

  return (
    <StyledCreate>
      <Header />
      <StyledCreateMain align="center">
        <StyledCreateContainer gap="3xl">
          <Text as="h1" variant="heading1"> 새 북마크 추가 </Text>
          <StyledCreateForm onSubmit={Submit}>
            <Stack gap="2xl">              
              <Stack gap="xl">
                <Stack gap="xs">
                  <Text as="p" variant="body"> 제목 </Text>
                  <StyledCreateInput
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Stack>
                <Stack gap="xs">
                  <Text as="p" variant="body"> URL * </Text>
                  <StyledCreateInput
                    placeholder="URL을 입력하세요"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Row gap="sm">
                <StyledCreateCheckbox
                  type="checkbox"
                  onChange={(e) => setImportant(e.target.checked)}
                />
                <Text as="p"> 중요함에 추가 </Text>
              </Row>
            </Stack> 
            <StyledCreateButtonContainer gap="sm">
              <Link to="/">
                <StyledCreateCancelButton> 취소 </StyledCreateCancelButton>
              </Link>
              <StyledCreateSubmitButton type="submit"> 추가하기 </StyledCreateSubmitButton>
            </StyledCreateButtonContainer>
          </StyledCreateForm>
        </StyledCreateContainer>
      </StyledCreateMain>
    </StyledCreate>
  );
};

export default Create;

const StyledCreate = styled.div`
  height: 100vh;
  background-color: ${theme.colors.bgSecondary};
`;

const StyledCreateMain = styled(Stack)`
  padding: 40px 120px;
`;

const StyledCreateContainer = styled(Stack)`
  padding: 40px;
  width: 800px;
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.sm};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.bgPrimary};
  box-sizing: border-box;
`;

const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledCreateInput = styled.input`
  padding: 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.bgPrimary};
`;

const StyledCreateCheckbox = styled.input`
  width: 16px;
  height: 16px;
`;

const StyledCreateButtonContainer = styled(Row)`
  align-self: flex-end;
`;

const StyledCreateSubmitButton = styled.button`
  padding: 10px 16px;
  color: ${theme.colors.textDisabled};
  font-size: 14px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.primary};
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const StyledCreateCancelButton = styled.button`
  padding: 10px 16px;
  color: ${theme.colors.textDisabled};
  font-size: 14px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.secondary};
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.secondaryHover};
  }
`;

const StyledCreateSuccess = styled.div`
  padding: 16px;
  color: ${theme.colors.successText};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.successBg};
`;