import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Btn, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <UserName>Welcome, {user.name}</UserName>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </div>
  );
};
