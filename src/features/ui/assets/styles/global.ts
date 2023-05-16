import { createGlobalStyle } from 'styled-components';

import { TThemePalette } from './themes';

export const GlobalStyles = createGlobalStyle`
  body {
    display: block;
    background-color: ${({ theme }) => (theme as TThemePalette).background};
    font-family: 'Nunito Sans', sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;
