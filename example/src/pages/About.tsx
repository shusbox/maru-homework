import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Header } from '../components/layout';
import { Text, Stack } from '../components/atoms';
import dayjs from 'dayjs';

const About = () => {
  const currentYear = dayjs().format('YYYY년 MM월');

  return (
    <StyledContainer>
      <Header />
      <StyledContent>
        <StyledSection>
          <Text as="h2" variant="heading1" style={{ marginBottom: theme.spacing['2xl'], borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: theme.spacing.md }}>
            📝 TODO Manager 소개
          </Text>
          <Stack gap="lg">
            <Text variant="bodyLarge" color="secondary" style={{ lineHeight: 1.8 }}>
              TODO Manager는 심플하고 직관적인 할 일 관리 애플리케이션입니다.
              복잡한 기능 없이 꼭 필요한 기능만 담아 누구나 쉽게 사용할 수 있도록 설계되었습니다.
            </Text>
            <Text variant="bodyLarge" color="secondary" style={{ lineHeight: 1.8 }}>
              LocalStorage를 활용하여 별도의 서버 없이 브라우저에서 데이터를 저장하며,
              새로고침 후에도 데이터가 유지됩니다.
            </Text>
          </Stack>
        </StyledSection>

        <StyledSection>
          <Text as="h2" variant="heading1" style={{ marginBottom: theme.spacing['2xl'], borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: theme.spacing.md }}>
            ✨ 주요 기능
          </Text>
          <Stack gap="md">
            <StyledFeatureItem>
              <Text variant="md" color="secondary">
                <Text as="span" weight="semibold" color="primary">할 일 추가</Text> - 제목과 상세 설명을 입력하여 새로운 TODO를 추가할 수 있습니다.
              </Text>
            </StyledFeatureItem>
            <StyledFeatureItem>
              <Text variant="md" color="secondary">
                <Text as="span" weight="semibold" color="primary">완료 상태 관리</Text> - 체크박스를 통해 완료/미완료 상태를 쉽게 변경할 수 있습니다.
              </Text>
            </StyledFeatureItem>
            <StyledFeatureItem>
              <Text variant="md" color="secondary">
                <Text as="span" weight="semibold" color="primary">삭제 기능</Text> - 더 이상 필요하지 않은 TODO를 삭제할 수 있습니다.
              </Text>
            </StyledFeatureItem>
            <StyledFeatureItem>
              <Text variant="md" color="secondary">
                <Text as="span" weight="semibold" color="primary">통계 확인</Text> - 전체, 완료, 미완료 개수를 한눈에 확인할 수 있습니다.
              </Text>
            </StyledFeatureItem>
            <StyledFeatureItem>
              <Text variant="md" color="secondary">
                <Text as="span" weight="semibold" color="primary">날짜 표시</Text> - Day.js를 활용하여 TODO 생성 시간을 보기 좋게 표시합니다.
              </Text>
            </StyledFeatureItem>
          </Stack>
        </StyledSection>

        <StyledSection>
          <Text as="h2" variant="heading1" style={{ marginBottom: theme.spacing['2xl'], borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: theme.spacing.md }}>
            🛠️ 사용 방법
          </Text>
          <Stack gap="lg">
            <Text variant="bodyLarge" color="secondary" style={{ lineHeight: 1.8 }}>
              <Text as="span" weight="semibold" color="primary">1. TODO 추가하기</Text><br />
              상단의 "추가하기" 메뉴를 클릭하거나 메인 페이지의 "새 TODO 추가" 버튼을 클릭합니다.
              제목을 입력하고(필수), 필요한 경우 상세 설명을 추가한 후 "추가하기" 버튼을 클릭합니다.
            </Text>
            <Text variant="bodyLarge" color="secondary" style={{ lineHeight: 1.8 }}>
              <Text as="span" weight="semibold" color="primary">2. 완료 상태 변경</Text><br />
              메인 페이지에서 각 TODO 카드의 체크박스를 클릭하여 완료/미완료 상태를 변경할 수 있습니다.
              완료된 TODO는 취소선과 함께 시각적으로 구분되어 표시됩니다.
            </Text>
            <Text variant="bodyLarge" color="secondary" style={{ lineHeight: 1.8 }}>
              <Text as="span" weight="semibold" color="primary">3. TODO 삭제</Text><br />
              각 TODO 카드의 "삭제" 버튼을 클릭하면 확인 메시지가 표시되며,
              확인을 누르면 해당 TODO가 영구적으로 삭제됩니다.
            </Text>
          </Stack>
        </StyledSection>

        <StyledSection>
          <Text as="h2" variant="heading1" style={{ marginBottom: theme.spacing['2xl'], borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: theme.spacing.md }}>
            💻 기술 스택
          </Text>
          <StyledTechStack>
            <StyledTechItem>React 19</StyledTechItem>
            <StyledTechItem>TypeScript 5</StyledTechItem>
            <StyledTechItem>Emotion</StyledTechItem>
            <StyledTechItem>React Router 6</StyledTechItem>
            <StyledTechItem>Day.js</StyledTechItem>
            <StyledTechItem>Vite</StyledTechItem>
          </StyledTechStack>
        </StyledSection>

        <StyledFooter>
          <Stack gap="sm" align="center">
            <Text variant="body" color="tertiary">
              <Text as="span" weight="semibold">제작자</Text>: Todo Manager Team
            </Text>
            <StyledLink href="https://github.com/justn-hyeok/maru-homework" target="_blank" rel="noopener noreferrer">
              GitHub 저장소
            </StyledLink>
            <Text variant="body" color="tertiary">
              <Text as="span" weight="semibold">제작 날짜</Text>: {currentYear}
            </Text>
          </Stack>
        </StyledFooter>
      </StyledContent>
    </StyledContainer>
  );
};

export default About;

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.bgSecondary};
`;

const StyledContent = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme.spacing['4xl']} ${theme.spacing['4xl']};
`;

const StyledSection = styled(Stack)`
  background-color: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['4xl']};
  margin-bottom: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.normal};
  gap: ${theme.spacing['2xl']};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const StyledFeatureItem = styled.div`
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  background-color: ${theme.colors.bgSecondary};
  border-radius: ${theme.borderRadius.md};
  border-left: 4px solid ${theme.colors.primary};
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: ${theme.colors.bgTertiary};
  }
`;

const StyledTechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const StyledTechItem = styled.div`
  padding: ${theme.spacing.lg};
  background-color: #eff6ff;
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.primary};
  transition: ${theme.transitions.normal};

  &:hover {
    background-color: #dbeafe;
  }
`;

const StyledFooter = styled.footer`
  background-color: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['3xl']} ${theme.spacing['4xl']};
  text-align: center;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
`;

const StyledLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.base};

  &:hover {
    text-decoration: underline;
  }
`;
