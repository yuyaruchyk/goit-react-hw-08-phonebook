import React from 'react';
import { StyledNav, StyledHeader, StyledNavLink } from './Header.styled';

import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <StyledNav>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
      </StyledNav>
    </StyledHeader>
  );
};
export default Header;
