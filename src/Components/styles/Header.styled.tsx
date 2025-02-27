import { NavLink } from "react-router";
import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "992px",
};

export const StyledHeader = styled.header`
  background-color: #000000;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  font-family: "Sigmar", serif;
  font-weight: 100;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 1rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: x-large;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 2rem;
  margin: 2rem;
  color: white;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.5rem;
    padding: 0.25rem 1rem;
  }
`;
