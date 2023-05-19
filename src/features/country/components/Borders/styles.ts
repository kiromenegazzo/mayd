import styled from 'styled-components';

import { LabelValue } from 'features/ui';

export const Container = styled(LabelValue)
  .attrs({ size: 'p2' })`
  display: flex;
  align-items: baseline;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;
