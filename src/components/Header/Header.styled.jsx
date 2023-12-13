import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 50 px;
  margin-bottom: 20px;
  border-bottom: 2px solid #000;
`;
export const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  flex-direction: row;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 700;
  font-size: 40px;
  padding: 10px;
  color: black;

  &:hover,
  &:focus {
    color: #404bbf;
  }
`;
