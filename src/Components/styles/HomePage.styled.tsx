import { NavLink } from "react-router";
import styled from "styled-components";
import ChangeImageFunc from "../../ChangeImageFunc";

const breakpoints = {
  mobile: "576px",
  tablet: "992px",
};

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 2rem;
  gap: 6rem;
  background-image: linear-gradient(#000000, #510e2b, #000000);
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 3rem;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }
`;

export const StyledHomePageParts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 16rem;
    border-width: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 12rem;
    border-width: 10px;
  }
`;

export const StyledChangeImageFunc = styled(ChangeImageFunc)`
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border: 20px solid yellow;
    margin-bottom: 1rem;

    @media (max-width: ${breakpoints.tablet}) {
      width: 16rem;
      height: 16rem;
      border-width: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 12rem;
      height: 12rem;
      border-width: 10px;
    }
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;
