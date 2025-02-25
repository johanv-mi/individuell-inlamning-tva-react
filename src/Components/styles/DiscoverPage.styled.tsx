import styled from "styled-components";
import { ChangeHeroFunc } from "../../ChangeImageFunc";

export const StyledDiscoverPage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0;
  padding: 0;
  gap: 6rem;
  background-color: #180161;
  padding: 4rem;
`;

export const StyledChangeHeroFunc = styled(ChangeHeroFunc)`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    box-sizing: border-box;
    transition: background-image 0.5s ease-in-out;
  }

  .content-container {
    position: relative;
    z-index: 1;
    padding: 2rem;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.5);
    max-width: 50%;
    margin-top: 5rem;
    margin-left: 2rem;
    border-radius: 8px;
  }

  h2 {
    margin-top: 0;
    font-size: 1.8rem;
  }

  .synopsis {
    margin-top: 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .rating {
    margin-top: 0.5rem;
    font-weight: bold;
  }
`;
