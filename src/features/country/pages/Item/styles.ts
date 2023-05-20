import styled from 'styled-components';

import { LabelValue, media, Typography } from '@features/ui';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 560px 1fr;
  gap: 80px;
  margin-top: 60px;
  
  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  `}
  
  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  margin-top: 32px;

  ${media.tablet`
    flex-direction: column;
  `}
`;

export const Column = styled.div``;

export const Footer = styled.div`
  margin-top: 60px;
  
  ${media.tablet`
    margin-top: 32px;
  `}
`;

export const Title = styled(Typography)
  .attrs({ type: 'p1', tag: 'h2' })``;

export const Item = styled(LabelValue)
  .attrs({ size:'p2' })``;
