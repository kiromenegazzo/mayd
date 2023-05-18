import styled from 'styled-components';

import { Typography } from 'features/ui';

export const Item = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  
  & + & {
    margin-top: 8px;
  }
`;

export const Label = styled(Typography)
  .attrs({ weight: 'semiBold' })`
  white-space: pre;  
`;

export const Value = styled(Typography)
  .attrs({ weight: 'light' })``;
