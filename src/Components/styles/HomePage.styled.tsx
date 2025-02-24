import { NavLink } from "react-router";
import styled from "styled-components";
import ChangeImageFunc from "../../ChangeImageFunc";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0;
  padding: 0;
  gap: 6rem;
  background-color: #180161;
  padding: 4rem;
`;

export const StyledHomePageParts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHomePageImageRound = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 25px solid yellow;
`;

export const StyledChangeImageFunc = styled(ChangeImageFunc)`
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border: 25px solid yellow;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
`;
