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
    width: 50%;
    height: 20rem;
    margin-top: 5rem;
    margin-left: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-top: 0;
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    flex: 0 0 auto;
  }

  .synopsis-container {
    flex: 1 1 auto;
    overflow-y: auto;
    margin: 1rem 0;
  }

  .synopsis {
    font-family: Arial, Helvetica, sans-serif;
  }

  .rating {
    margin-top: auto;
    padding-top: 0.5rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    flex: 0 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const StyledShowCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  background-color: #180161;
`;

export const StyledAnimeCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const StyledAnimeImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledAnimeTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.8rem 1rem 0.5rem;
  font-weight: 600;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`;

export const StyledRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyledRatingValue = styled.span`
  font-weight: bold;
  color: #ff6b6b;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;

export const StyledRatingMax = styled.span`
  color: rgba(255, 255, 255, 0.7);
  margin-left: 2px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledLoadingContainer = styled.div`
  padding: 4rem;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  background-color: #180161;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  min-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #ff6b6b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`;
