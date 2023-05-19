import styled from 'styled-components';

import { Image, LabelValue, Typography } from 'features/ui';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 560px 1fr;
  gap: 80px;
  margin-top: 60px;
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
`;

export const Column = styled.div``;

export const Footer = styled.div`
  margin-top: 60px;
`;

export const Flag = styled(Image)`
  max-width: 560px;
`;

export const Title = styled(Typography)
  .attrs({ type: 'p1', tag: 'h2' })``;

export const Item = styled(LabelValue)
  .attrs({ size:'p2' })``;
