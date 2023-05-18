import styled from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';
import { Typography } from 'features/ui/components/Typography';

export const Card = styled.article`
  overflow: hidden;
  border-radius: 4px;
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

export const Item = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  
  & + & {
    margin-top: 8px;
  }
`;

export const Label = styled(Typography)
  .attrs({ type: 'p3', weight: 'semiBold' })``;

export const Value = styled(Typography)
  .attrs({ type: 'p3' })``;
