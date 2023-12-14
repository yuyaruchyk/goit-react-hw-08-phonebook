import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Btn, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div>
      <UserName>Welcome, {user.name}</UserName>
      <Btn type="button" onClick={handleLogout}>
        Logout
      </Btn>
    </div>
  );
};
