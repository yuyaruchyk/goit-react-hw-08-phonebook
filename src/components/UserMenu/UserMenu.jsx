import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  StyledNav,
  StyledHeader,
  StyledNavLink,
} from '../Header/Header.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>

      <StyledNavLink to="/contacts">Contacts</StyledNavLink>

      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
