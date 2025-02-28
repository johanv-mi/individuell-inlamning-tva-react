import styled from "styled-components";
import { VerdictResults } from "../../types/anime";

const breakpoints = {
  mobile: "576px",
  tablet: "992px",
};

export const StyledGetInToItPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  background-color: pink;
  padding: 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 3rem;
    padding: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const StyledGetInToItPageLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: ${breakpoints.tablet}) {
    width: 25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 20rem;
  }
`;

export const StyledGetInToItPageRightPart = styled.div`
  width: 25rem;
  height: 20rem;
  margin-top: 0.5rem;
  padding: 0 2rem 2rem 2rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 4px solid yellow;
  color: antiquewhite;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #000000;

  h3 {
    font-size: x-large;
  }

  h4 {
  }

  p {
    font-size: large;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 20rem;
    height: 18rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 18rem;
    height: 16rem;
    padding: 0 1rem 1rem 1rem;

    h3 {
      font-size: larger;
    }

    p {
      font-size: medium;
    }
  }
`;

export const StyledGetInToItPageImageRound = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 20px solid yellow;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 16rem;
    height: 16rem;
    border-width: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 12rem;
    height: 12rem;
    border-width: 10px;
    margin-bottom: 1.5rem;
  }
`;

export const StyledResultsDiv = styled.div`
  width: 15rem;
  background-color: #757575;
  padding: 1rem;
  color: beige;
  margin-top: 1rem;
  border: 2px solid black;
  border-radius: 5%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 12rem;
    padding: 0.75rem;
  }
`;

export const StyledVerdict = styled.p<{ verdict: VerdictResults }>`
  color: ${(props) => props.verdict.color};
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => `${props.verdict.color}15`};
  display: inline-block;
  margin-top: 8px;
  border: 1px solid ${(props) => props.verdict.color};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;
