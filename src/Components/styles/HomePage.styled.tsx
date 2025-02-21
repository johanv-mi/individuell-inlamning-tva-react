import { NavLink } from "react-router";
import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  background-color: pink;
`;

export const StyledHomePageParts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHomePageImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 25px solid yellow;
`;

export const StyledNavLink = styled(NavLink)``;
