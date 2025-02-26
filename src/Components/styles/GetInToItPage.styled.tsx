import styled from "styled-components";
import { VerdictResults } from "../../hooks/animeQueries";

export const StyledGetInToItPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  background-color: pink;
  padding: 4rem;
`;

export const StyledGetInToItPageLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  font-family: Arial, Helvetica, sans-serif;
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
  h3 {
    font-size: x-large;
  }
  h4 {
  }
  p {
    font-size: large;
  }
  background-color: #000000;
`;

export const StyledGetInToItPageImageRound = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 20px solid yellow;
  margin-bottom: 2rem;
`;

export const StyledResultsDiv = styled.div`
  width: 15rem;
  background-color: #757575;
  padding: 1rem;
  color: beige;
  margin-top: 1rem;
  border: 2px solid black;
  border-radius: 5%;
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
`;
