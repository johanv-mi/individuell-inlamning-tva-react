import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "992px",
};

export const StyledFooter = styled.footer`
  padding: 2rem;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    gap: 1.5rem;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 700;
    color: bisque;
  }
`;
