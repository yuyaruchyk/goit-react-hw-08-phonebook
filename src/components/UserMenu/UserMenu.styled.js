import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  margin-bottom: 20px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: block;
  min-width: 140px;
  height: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: white;
  background-color: #7c90f3;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const UserName = styled.p`
  font-size: 20px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
  color: black;

  &:hover,
  &:focus {
    color: #404bbf;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
