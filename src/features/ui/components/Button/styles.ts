import styled from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';
import { typographyMixin } from 'features/ui/components/Typography';

export const Button = styled.button`
  ${({ theme }) => typographyMixin({ theme, type: 'p3' })};
  
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 20px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.element};
  cursor: pointer;
`;

Button.defaultProps = {
  theme: lightTheme,
};

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
