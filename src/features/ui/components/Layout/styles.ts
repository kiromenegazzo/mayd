import styled from 'styled-components';

import { MAX_CONTENT_WIDTH, media } from 'features/ui/assets/styles';

export const Container = styled.main`
  max-width: ${MAX_CONTENT_WIDTH}px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 16px;
  
  ${media.tablet`
    padding-right: 24px;
    padding-left: 24px;
  `}
`;

