import { Outlet } from 'react-router-dom';

import { Header } from 'features/ui';

export const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};
