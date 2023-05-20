import { Suspense } from 'react';

import { Spinner } from '@features/ui';

import { Content } from './Content';

export const Item = () =>  (
  <Suspense fallback={<Spinner/>}>
    <Content/>
  </Suspense>
);
