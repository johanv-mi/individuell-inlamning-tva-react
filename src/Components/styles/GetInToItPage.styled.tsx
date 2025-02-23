import styled from "styled-components";

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
  margin-top: 10rem;
  padding-left: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 4px solid yellow;
  color: antiquewhite;
  h3 {
    font-size: x-large;
  }
  p {
    font-size: large;
  }
  background-color: darkblue;
`;

export const StyledGetInToItPageImageRound = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 25px solid yellow;
  margin-bottom: 5rem;
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
