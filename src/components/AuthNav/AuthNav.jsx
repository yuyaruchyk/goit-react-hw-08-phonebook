import { StyledNavLink, StyledNavAuth } from '../Header/Header.styled';

export const AuthNav = () => {
  return (
    <StyledNavAuth>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledNavAuth>
  );
};
