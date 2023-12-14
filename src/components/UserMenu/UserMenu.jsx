import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Btn, StyledDiv, UserName } from './UserMenu.styled';
import { StyledNavLink } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <StyledDiv>
      <UserName>Welcome, {user.name}</UserName>
      <StyledNavLink to="/phonebook">Your phonebook</StyledNavLink>
      <Btn type="button" onClick={handleLogout}>
        Logout
      </Btn>
    </StyledDiv>
  );
};
