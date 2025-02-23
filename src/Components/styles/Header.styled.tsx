import { NavLink } from "react-router";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #003092;
  border-bottom: 1px solid blueviolet;
  border
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 2rem;
  color: white;
  text-decoration: none;
`;
