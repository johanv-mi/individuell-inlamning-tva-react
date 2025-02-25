import { useState } from "react";
import { AnimeDetails } from "../Components/AnimeDetails";
import { SearchResults } from "../Components/SearchResults";
import {
  StyledGetInToItPageImageRound,
  StyledGetInToItPageLeftPart,
  StyledGetInToItPageRightPart,
} from "../Components/styles/GetInToItPage.styled";
import { StyledHomePage } from "../Components/styles/HomePage.styled";
import { useAnimeDetails } from "../hooks/animeQueries";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg";

export default function GetInToItPage() {
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);

  const { data: selectedAnime } = useAnimeDetails(selectedAnimeId);

  const handleAnimeSelect = async (title: string) => {
    // Get MAL ID from title
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`
    );
    const data = await response.json();
    if (data?.data?.[0]?.mal_id) {
      setSelectedAnimeId(data.data[0].mal_id);
    }
  };

  return (
    <StyledHomePage>
      <StyledGetInToItPageLeftPart>
        <StyledGetInToItPageImageRound
          src={selectedAnime?.image || DEFAULT_IMAGE}
          alt={selectedAnime?.title || "Default anime image"}
        />
        <SearchResults onAnimeSelect={handleAnimeSelect} />
      </StyledGetInToItPageLeftPart>

      <StyledGetInToItPageRightPart>
        {selectedAnime && <AnimeDetails anime={selectedAnime} />}
      </StyledGetInToItPageRightPart>
    </StyledHomePage>
  );
}
