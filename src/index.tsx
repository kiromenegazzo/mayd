import { StrictMode } from 'react';

import { RouterProvider } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

import { ErrorBoundary } from 'features/core';
import { router } from 'features/country';
import { Styles, ThemeProvider } from 'features/ui';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLDivElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
        <ThemeProvider >
          <Styles/>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </StyleSheetManager>
    </ErrorBoundary>
  </StrictMode>,
);
