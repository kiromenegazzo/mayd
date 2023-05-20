import { createBrowserRouter } from 'react-router-dom';

import { Error404, Layout } from '@features/ui';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        async lazy() {
          const { List } = await import('@features/country/pages/List');

          return { Component: List };
        },
      },
      {
        path: '/:id',
        async lazy() {
          const { Item } = await import('@features/country/pages/Item');

          return { Component: Item };
        },
      },
    ],
  },
]);
