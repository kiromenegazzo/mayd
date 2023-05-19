import styled from 'styled-components';

import { lightTheme, Typography, BORDER_RADIUS } from 'features/ui';

export const Card = styled.article`
  overflow: hidden;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.element};
`;

Card.defaultProps = {
  theme: lightTheme,
};

export const Content = styled.div`
  padding: 20px 20px 40px 20px;
`;

export const Image = styled.img``;

export const Title = styled(Typography)
  .attrs({ type: 'p2' })`
  margin-bottom: 16px;  
`;
