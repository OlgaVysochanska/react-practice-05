import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { getUserById } from 'redux/users/usersOperations';
import { selectCurrent } from 'redux/users/usersSelectors';

export const UserDetailsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const user = useSelector(selectCurrent);

  console.log(user);

  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </div>
      )}
    </>
  );
};
