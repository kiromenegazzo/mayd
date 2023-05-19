import styled from 'styled-components';

import { BORDER_RADIUS, lightTheme } from 'features/ui/assets/styles';
import { typographyMixin } from 'features/ui/components/Typography';
import { filterTheme } from 'features/ui/utils/styles';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 16px 28px;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${({ theme }) => theme.element};
`;

export const Input = styled.input`
  ${({ theme }) => typographyMixin({ theme, type: 'p3' })}
  
  ::placeholder {
    ${({ theme }) => typographyMixin({ theme, type: 'p3' })}
  }
  
  width: 100%;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
`;

Input.defaultProps = {
  theme: lightTheme,
};

export const Icon = styled.svg
  .withConfig({
    shouldForwardProp: filterTheme,
  })`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.text};
`;

Icon.defaultProps = {
  theme: lightTheme,
};
