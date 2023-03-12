import { Route, Routes } from 'react-router';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'components/pages/HomePage';
import { UsersPage } from 'components/pages/UsersPage';
import { UserDetailsPage } from 'components/pages/UserDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
