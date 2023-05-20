import styled from 'styled-components';

import { Typography } from '@features/ui/components/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled(Typography)
  .attrs({ type: 'p1' })``;

export const Message = styled(Typography)``;
