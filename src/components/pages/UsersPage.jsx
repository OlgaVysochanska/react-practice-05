import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { selectUsers } from 'redux/users/usersSelectors';
import { getUsers } from 'redux/users/usersOperations';

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </>
  );
};
