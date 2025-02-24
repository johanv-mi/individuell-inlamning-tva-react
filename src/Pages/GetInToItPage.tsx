// import { ChangeEvent, useEffect, useState } from "react";

// import {
//   StyledGetInToItPageImageRound,
//   StyledGetInToItPageLeftPart,
//   StyledGetInToItPageRightPart,
//   StyledResultsDiv,
// } from "../Components/styles/GetInToItPage.styled";
// import { StyledHomePage } from "../Components/styles/HomePage.styled";

// interface AnimeResult {
//   title: string;
//   image: string;
//   rating: string;
//   synopsis: string;
//   episodes: string;
//   status: number;
//   episodeLength: number;
//   totalHours: number;
//   startDate: string;
//   endDate: string;
//   relatedSeasons?: AnimeResult[];
// }

// interface JikanAnimeData {
//   mal_id: number;
//   title: string;
//   images: {
//     jpg: {
//       large_image_url: string;
//     };
//   };
//   score: number;
//   synopsis: string;
//   status: string;
//   episodes: number;
//   duration: string;
//   year: number;
//   aired: {
//     from: string;
//     to: string;
//   };
// }

// export default function GetInToItPage() {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [results, setResults] = useState<AnimeResult[]>([]);
//   const [selectedAnime, setSelectedAnime] = useState<AnimeResult | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const extractMinutes = (duration: string): numer => {
//     const match = duration.match(/(\d+)/);
//     return match ? parseInt(match[0]) : 0;
//   };

//   const fetchRelatedSeasons = async (malId: number): Promise<AnimeResult[]> => {
//     try {
//       const response = await fetch(
//         `https://api.jikan.moe/v4/anime/${malId}/relations`
//       );
//       const data = await response.json();

//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const relatedAnime = data.data.filter((relation: any) =>
//         ["Sequel", "Alternative version", "Side story"].includes(
//           relation.relation
//         )
//       );

//       const seasons: AnimeResult[] = [];

//       for (const anime of relatedAnime) {
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         const animeResponse = await fetch(
//           `https://api.jikan.moe/v4/anime/${anime.entry.mal_id}`
//         );
//         const animeData = await animeResponse.json();
//         const data = animeData.data;

//         const episodeLength = extractMinutes(data.duration);

//         seasons.push({
//           title: data.title,
//           image: data.images.jpg.large_image_url,
//           rating: data.score?.troString() || "N/A",
//           synopsis: data.synopsis || "",
//           episodes: data.episodes || 0,
//           status: data.status,
//           episodeLength: episodeLength,
//           totalHours: Math.round((data.episodes * episodeLength) / 60) || 0,
//           startDate: data.aired.from
//             ? new Date(data.aired.from).getFullYear().toString()
//             : "N/A",
//           endDate: data.aired.to
//             ? new Date(data.aired.to).getFullYear().toString()
//             : "N/A",
//         });
//       }

//       return seasons;
//     } catch (error) {
//       console.error("Error fetching related seasons:", error);
//       return [];
//     }
//   };
//   useEffect(() => {
//     const fetchAnime = async () => {
//       if (searchTerm.length > 0) {
//         setLoading(true);
//         try {
//           const response = await fetch(
//             `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=5`
//           );
//           const json = await response.json();

//           const animeData = json.data.map((anime: JikanAnimeData) => {
//             const episodeLength = extractMinutes(anime.duration);
//             return {
//               title: anime.title,
//               image: anime.images.jpg.large_image_url,
//               rating: anime.score?.toString() || "N/A",
//               synopsis: anime.synopsis || "",
//               episodes: anime.episodes || 0,
//               status: anime.status,
//               episodeLength: episodeLength,
//               totalHours:
//                 Math.round((anime.episodes * episodeLength) / 60) || 0,
//               startDate: anime.aired.from
//                 ? new Date(anime.aired.from).getFullYear().toString()
//                 : "N/A",
//               endDate: anime.aired.to
//                 ? new Date(anime.aired.to).getFullYear().toString()
//                 : "N/A",
//             };
//           });
//           setResults(animeData);
//         } catch (error) {
//           console.error("Error fetching anime:", error);
//           setResults([]);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setResults([]);
//       }
//     };
//     const timeoutId = setTimeout(fetchAnime, 500);
//     return () => clearTimeout(timeoutId);
//   }, [searchTerm]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const populateAnimeInformation = async (title: string) => {
//     const selectedAnime = results.find((anime) => anime.title === title);
//     if (selectedAnime) {
//       const response = await fetch(
//         `https://api.jikan.moe/v4/anime?q=${title}&limit=1`
//       );
//       const json = await response.json();
//       const malId = json.data[0]?.mal_id;

//       if (malId) {
//         const relatedSeasons = await fetchRelatedSeasons(malId);
//         setSelectedAnime({ ...selectedAnime, relatedSeasons });
//       } else {
//         setSelectedAnime(selectedAnime);
//       }
//     }
//   };

//   return (
//     <StyledHomePage>
//       <StyledGetInToItPageLeftPart>
//         <StyledGetInToItPageImageRound
//           src={selectedAnime?.image}
//           alt='{selectedAnime?.title}'
//         />
//         <div>
//           <input
//             type='text'
//             value={searchTerm}
//             onChange={handleInputChange}
//             placeholder='Search anime...'
//           />
//           <StyledResultsDiv>
//             {loading ? (
//               <div>Loading...</div>
//             ) : (
//               results.map((anime, index) => (
//                 <div
//                   key={index}
//                   onClick={() => populateAnimeInformation(anime.title)}
//                 >
//                   {anime.title}
//                 </div>
//               ))
//             )}
//           </StyledResultsDiv>
//         </div>
//       </StyledGetInToItPageLeftPart>
//       <StyledGetInToItPageRightPart>
//         {selectedAnime && (
//           <div>
//             <h3>{selectedAnime.title}</h3>
//             <p>
//               Years: {selectedAnime.startDate} - {selectedAnime.endDate}
//             </p>
//             <p>Episodes: {selectedAnime.episodes}</p>
//             <p>Status: {selectedAnime.status}</p>
//             <p>Total hours: {selectedAnime.totalHours}</p>
//             <p>Rating: {selectedAnime.rating}</p>

//             {selectedAnime.relatedSeasons &&
//               selectedAnime.relatedSeasons.length > 0 && (
//                 <div>
//                   <h4>Related Seasons:</h4>
//                   {selectedAnime.relatedSeasons.map((season, index) => (
//                     <div key={index}>
//                       <p>{season.title}</p>
//                       <p>Episodes: {season.episodes}</p>
//                       <p>Total hours: {season.totalHours}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         )}
//       </StyledGetInToItPageRightPart>
//     </StyledHomePage>
//   );
// }

import { useState } from "react";
import { AnimeDetails } from "../Components/AnimeDetails";
import { SearchResults } from "../Components/SearchResults";
import {
  StyledGetInToItPageImageRound,
  StyledGetInToItPageLeftPart,
  StyledGetInToItPageRightPart,
} from "../Components/styles/GetInToItPage.styled";
import { StyledHomePage } from "../Components/styles/HomePage.styled";
import { useAnimeDetails, useRelatedAnime } from "../hooks/animeQueries";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg";

export default function GetInToItPage() {
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);

  const { data: selectedAnime } = useAnimeDetails(selectedAnimeId);
  const { data: relatedSeasons } = useRelatedAnime(selectedAnimeId);

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
        {selectedAnime && (
          <AnimeDetails anime={selectedAnime} relatedSeasons={relatedSeasons} />
        )}
      </StyledGetInToItPageRightPart>
    </StyledHomePage>
  );
}
