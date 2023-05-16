import { StrictMode } from 'react';

import { Styles, lightTheme } from 'features/ui';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
      <ThemeProvider theme={lightTheme}>
        <>
          <Styles/>
          <App/>
        </>
      </ThemeProvider>
    </StyleSheetManager>
  </StrictMode>,
);
