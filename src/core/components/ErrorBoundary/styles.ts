import styled from 'styled-components';

import { Button, Typography } from '@features/ui';

export const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

export const Title = styled(Typography)
  .attrs({ variant: 'h1' })`
  text-align: center;  
`;

export const Code = styled.pre`
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ReloadButton = styled(Button)``;

