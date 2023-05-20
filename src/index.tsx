import { StrictMode } from 'react';

import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from '@core/components/ErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

import { router } from '@features/country';
import { Styles, ThemeProvider } from '@features/ui';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLDivElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

root.render(
  <StrictMode>
    <ErrorBoundary>
      <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
        <ThemeProvider >
          <Styles/>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools/>
          </QueryClientProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </ErrorBoundary>
  </StrictMode>,
);
