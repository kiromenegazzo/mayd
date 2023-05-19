import styled from 'styled-components';

import { lightTheme, MAX_CONTENT_WIDTH } from 'features/ui/assets/styles';
import { Typography } from 'features/ui/components/Typography';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.element};
`;

Header.defaultProps = {
  theme: lightTheme,
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${MAX_CONTENT_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 16px;
`;

export const Title = styled(Typography)
  .attrs({ tag: 'h1', type: 'p1' })``;
