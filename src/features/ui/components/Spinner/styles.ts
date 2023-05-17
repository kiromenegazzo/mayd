import styled, { css, keyframes } from 'styled-components';

import { lightTheme } from 'features/ui/assets/styles';

import { ISpinnerStyleProps } from './types';

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled.div<ISpinnerStyleProps>`
  ${({ $isAbsolute }) => $isAbsolute ? css`
    position: absolute;
    top: calc(50% - 16px);
    left: calc(50% - 16px);
  ` : css`
    position: relative;
  `}
  
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 4px solid ${({ theme }) => theme.text};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} .75s linear infinite;
`;

Spinner.defaultProps = {
  theme: lightTheme,
};
