import { ChangeEvent, useEffect, useState } from "react";

import {
  StyledHomePage,
  StyledHomePageImageRound,
  StyledHomePageParts,
} from "../Components/styles/HomePage.styled";

interface AnimeAttributes {
  canonicalTitle: string;
  posterImage: {
    small: string;
    original: string;
  };
  averageRating: string;
  synopsis: string;
  status: string;
  episodeCount: number;
}

interface AnimeData {
  attributes: AnimeAttributes;
  id: string;
  type: string;
}

interface ApiResponse {
  data: AnimeData[];
}

interface AnimeResult {
  title: string;
  image: string;
  rating: string;
  synopsis: string;
  episodes: number;
  status: string;
}

export default function GetInToItPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<AnimeResult[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<AnimeResult | null>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      })
        .then((response) => response.json())
        .then((json: ApiResponse) => {
          const animeData = json.data.map((anime) => ({
            title: anime.attributes.canonicalTitle,
            image: anime.attributes.posterImage.small,
            rating: anime.attributes.averageRating,
            synopsis: anime.attributes.synopsis,
            episodes: anime.attributes.episodeCount,
            status: anime.attributes.status,
          }));
          setResults(animeData);
        });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const populateAnimeInformation = (title: string) => {
    const selectedAnime = results.find((anime) => anime.title === title);
    if (selectedAnime) {
      setSelectedAnime(selectedAnime);
    }
  };

  return (
    <StyledHomePage>
      <StyledHomePageParts>
        <StyledHomePageImageRound
          src={selectedAnime?.image}
          alt='{selectedAnime?.title}'
        />
        <div>
          <input
            type='text'
            value={searchTerm}
            onChange={handleInputChange}
            placeholder='Search anime...'
          />
          <div>
            {results.map((anime, index) => (
              <div
                key={index}
                onClick={() => populateAnimeInformation(anime.title)}
              >
                {anime.title}
              </div>
            ))}
          </div>
        </div>
      </StyledHomePageParts>
      <StyledHomePageParts>
        {selectedAnime && (
          <div>
            <h3>{selectedAnime.title}</h3>
            <p>Rating: {selectedAnime.rating}</p>
            <p>Episodes: {selectedAnime.episodes}</p>
            <p>Status: {selectedAnime.status}</p>
            <p>{selectedAnime.synopsis}</p>
          </div>
        )}
      </StyledHomePageParts>
    </StyledHomePage>
  );
}
