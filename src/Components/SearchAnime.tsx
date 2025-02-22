import { ChangeEvent, useEffect, useState } from "react";

interface AnimeAttributes {
  canonicalTitle: string;
  synopsis?: string;
  averageRating?: string;
  status?: string;
}

interface AnimeData {
  attributes: AnimeAttributes;
  id: string;
  type: string;
}

interface ApiResponse {
  data: AnimeData[];
}

export default function SearchAnime() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

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
          const titles = json.data.map(
            (anime) => anime.attributes.canonicalTitle
          );
          setResults(titles);
        });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  function populateAnimeInformation(title: string) {
    console.log(title);
    return <p>{title}</p>;
  }

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search anime...'
      />
      <div>
        {results.map((title, index) => (
          <div key={index} onClick={() => populateAnimeInformation(title)}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}
