import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Text, Row, Stack } from "../components/atoms/index";
import { Header } from "../components/layout/index";
import dayjs from 'dayjs';

const About = () => {
  const currentYear = dayjs().format('YYYY년 MM월');

  return (
    <StyledAbout>
      <Header />
      <StyledAboutMain align="center" gap="2xl">
        <StyledAboutCard gap="3xl">
          <StyledAboutTitle as="h1" variant="heading1"> 📝 BookMark Manager 소개 </StyledAboutTitle>
          <Text as="p" variant="bodyLarge">
            BookMark Manager는 원하는 링크를 북마크 할 수 있는 애플리케이션입니다. <br />
            LocalStorage를 활용하여 별도의 서버 없이 브라우저에서 데이터를 저장하며, 새로고침 후에도 데이터가 유지됩니다.
          </Text>
        </StyledAboutCard>
        <StyledAboutCard gap="3xl">
          <StyledAboutTitle as="h1" variant="heading1"> ✨ 주요 기능 </StyledAboutTitle>
          <Stack>
            <StyledAboutList as="p" variant="body"> <Text weight="semibold"> 북마크 추가 </Text> - 제목과 URL을 입력하여 새로운 북마크를 추가할 수 있습니다. </StyledAboutList>
            <StyledAboutList as="p" variant="body"> <Text weight="semibold"> 중요함 모음 </Text> - 중요한 북마크는 중요함 모음에 추가하여 쉽게 확인할 수 있습니다. </StyledAboutList>
            <StyledAboutList as="p" variant="body"> <Text weight="semibold"> 삭제 기능 </Text> - 더 이상 필요하지 않은 북마크를 삭제할 수 있습니다. </StyledAboutList>
            <StyledAboutList as="p" variant="body"> <Text weight="semibold"> 통계 확인 </Text> - 전체, 중요함 개수를 한눈에 확인할 수 있습니다. </StyledAboutList>
            <StyledAboutList as="p" variant="body"> <Text weight="semibold"> 날짜 표시 </Text> - Day.js를 활용하여 북마크 생성 시간을 보기 좋게 표시합니다. </StyledAboutList>
          </Stack>
        </StyledAboutCard>
        <StyledAboutCard gap="3xl">
          <StyledAboutTitle as="h1" variant="heading1"> 🛠️ 사용 방법 </StyledAboutTitle>
          <Text as="p" variant="bodyLarge">
            1. TODO 추가하기 <br />
            상단의 "추가하기" 메뉴를 클릭하거나 메인 페이지의 "새 TODO 추가" 버튼을 클릭합니다. 제목을 입력하고(필수), 필요한 경우 상세 설명을 추가한 후 "추가하기" 버튼을 클릭합니다. <br />
            <br />
            2. 완료 상태 변경 <br />
            메인 페이지에서 각 TODO 카드의 체크박스를 클릭하여 완료/미완료 상태를 변경할 수 있습니다. 완료된 TODO는 취소선과 함께 시각적으로 구분되어 표시됩니다. <br />
            <br />
            3. TODO 삭제 <br />
            각 TODO 카드의 "삭제" 버튼을 클릭하면 확인 메시지가 표시되며, 확인을 누르면 해당 TODO가 영구적으로 삭제됩니다.
          </Text>
        </StyledAboutCard>
        <StyledAboutCard gap="3xl">
          <StyledAboutTitle as="h1" variant="heading1"> 💻 기술 스택 </StyledAboutTitle>
          <Stack>
            <Row>
              <StyledAboutButtonList as="p" variant="heading3"> React 19 </StyledAboutButtonList>
              <StyledAboutButtonList as="p" variant="heading3"> TypeScript 5 </StyledAboutButtonList>
              <StyledAboutButtonList as="p" variant="heading3"> Emotion </StyledAboutButtonList>
            </Row>
            <Row>
              <StyledAboutButtonList as="p" variant="heading3"> React Router 6 </StyledAboutButtonList>
              <StyledAboutButtonList as="p" variant="heading3"> Day.js </StyledAboutButtonList>
              <StyledAboutButtonList as="p" variant="heading3"> Vite </StyledAboutButtonList>
            </Row>
          </Stack>
        </StyledAboutCard>
        <StyledAboutCard align="center">
          <Text as="p" variant="caption"> 제작자: shusbox </Text>
          <Text as="p" variant="caption"> Github </Text>
          <Text as="p" variant="caption"> 제작 날짜: {currentYear} </Text>
        </StyledAboutCard>
      </StyledAboutMain>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  background-color: ${theme.colors.bgSecondary};
`;

const StyledAboutMain = styled(Stack)`
  padding: 40px 120px;
`;

const StyledAboutCard = styled(Stack)`
  padding: 40px;
  padding-top: 32px;
  width: 800px;
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.sm};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.bgPrimary};
  box-sizing: border-box;
  transition: ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const StyledAboutTitle = styled(Text)`
  line-height: 50px;
  border-bottom: 2px solid ${theme.colors.border};
`;

const StyledAboutList = styled(Text)`
  padding: 16px;
  width: 100%;
  border-left: 4px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.bgSecondary};

  &:hover {
    background-color: ${theme.colors.bgTertiary};
  }
`;

const StyledAboutButtonList = styled(Text)`
  padding: 16px;
  width: 100%;
  color: ${theme.colors.primary};
  text-align: center;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.bgSecondary};
  transition: ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.primaryHover};
    background-color: ${theme.colors.bgTertiary};
  }
`;