import { NavLink } from "react-router";
import styled from "styled-components";
import ChangeImageFunc from "../../ChangeImageFunc";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 2rem;
  gap: 6rem;
  background-image: linear-gradient(#000000, #510e2b, #000000);
  box-sizing: border-box;
`;

export const StyledHomePageParts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHomePageImageRound = styled.img`
  width: 100%;
  max-width: 20rem;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  border: 20px solid yellow;
  margin-bottom: 1rem;
`;

export const StyledChangeImageFunc = styled(ChangeImageFunc)`
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border: 20px solid yellow;
    margin-bottom: 1rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-family: "Sigmar", serif;
  font-weight: 100;
  color: #fdff74;
`;
