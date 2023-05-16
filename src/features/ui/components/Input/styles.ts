import styled from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';
import { typographyMixin } from 'features/ui/components/Typography';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 16px 28px;
  border-radius: 4px;
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
    shouldForwardProp: (prop) => !['theme'].includes(prop),
  })`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.text};
`;

Icon.defaultProps = {
  theme: lightTheme,
};
