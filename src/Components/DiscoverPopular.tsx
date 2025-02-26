import ShowCard from "../Components/ShowCard";
import { StyledTrendingDiv } from "./styles/DiscoverPage.styled";

export default function DiscoverPopular() {
  return (
    <div>
      <StyledTrendingDiv>
        <h1>Trending Shows</h1>
      </StyledTrendingDiv>
      <ShowCard />
    </div>
  );
}
