import { Outlet } from 'react-router-dom';

import { Header } from 'features/ui';

import * as UI from './styles';

export const Layout = () => {
  return (
    <>
      <Header/>
      <UI.Container>
        <Outlet />
      </UI.Container>
    </>
  );
};
