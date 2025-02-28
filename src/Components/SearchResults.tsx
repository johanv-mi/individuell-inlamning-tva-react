import { ChangeEvent, useState } from "react";
import { useSearchAnime } from "../hooks/useAnimeData";
import { AnimeResult } from "../types/anime";
import { StyledResultsDiv } from "./styles/GetInToItPage.styled";

interface SearchResultsProps {
  onAnimeSelect: (title: string) => void;
}

export function SearchResults({ onAnimeSelect }: SearchResultsProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: results, isLoading, error } = useSearchAnime(searchTerm);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search anime...'
      />
      <StyledResultsDiv>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error fetching results</div>
        ) : (
          results?.map((anime: AnimeResult, index: number) => (
            <div key={index} onClick={() => onAnimeSelect(anime.title)}>
              {anime.title}
            </div>
          ))
        )}
      </StyledResultsDiv>
    </div>
  );
}
