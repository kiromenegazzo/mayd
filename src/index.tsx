import React, { StrictMode } from 'react';

import { Styles } from 'features/ui';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
      <>
        <Styles/>
        Hello world!
      </>
    </StyleSheetManager>
  </StrictMode>,
);
