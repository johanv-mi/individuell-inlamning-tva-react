import SearchAnime from "../Components/SearchAnime";
import {
  StyledHomePage,
  StyledHomePageImageRound,
  StyledHomePageParts,
} from "../Components/styles/HomePage.styled";

export default function GetInToItPage() {
  // const { shows } = useQuery({
  //   queryKey: ["showData"],
  //   queryFn: showData,
  // });

  return (
    <StyledHomePage>
      <StyledHomePageParts>
        <StyledHomePageImageRound
        // src={data?.data[9]?.attributes?.posterImage?.medium}
        // alt=''
        />
        <SearchAnime />
      </StyledHomePageParts>
      <StyledHomePageParts>
        <h2>Here is Anime</h2>
      </StyledHomePageParts>
    </StyledHomePage>
  );
}
