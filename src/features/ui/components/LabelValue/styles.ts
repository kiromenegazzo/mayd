import styled from 'styled-components';

import { Typography } from 'features/ui';

export const Item = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

export const Label = styled(Typography)
  .attrs({ weight: 'semiBold', tag: 'span' })`
  padding-right: 8px;  
  white-space: pre;
`;

export const Value = styled(Typography)
  .attrs({ weight: 'light', tag: 'span' })``;
