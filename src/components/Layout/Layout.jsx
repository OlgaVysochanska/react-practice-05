import { Outlet } from 'react-router';

import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
