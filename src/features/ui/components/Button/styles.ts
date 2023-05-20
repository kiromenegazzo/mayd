import styled from 'styled-components';

import { lightTheme } from '@features/ui/assets/styles';
import { BORDER_RADIUS } from '@features/ui/assets/styles';
import { typographyMixin } from '@features/ui/components/Typography';

export const Button = styled.button`
  ${({ theme }) => typographyMixin({ theme, type: 'p3' })};
  
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 20px;
  border: 0;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.element};
  opacity: ${({ disabled }) => disabled ? .25 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

Button.defaultProps = {
  theme: lightTheme,
};

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
