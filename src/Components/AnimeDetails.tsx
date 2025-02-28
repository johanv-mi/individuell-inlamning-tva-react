import { StyledVerdict } from "../Components/styles/GetInToItPage.styled";
import { useRelatedAnime } from "../hooks/useAnimeData";
import { calculateTotalStats, calculateVerdict } from "../hooks/useAnimeUtils";
import { AnimeResult } from "../types/anime";

interface AnimeDetailsProps {
  anime: AnimeResult;
  malId?: number | null;
}

export function AnimeDetails({ anime, malId }: AnimeDetailsProps) {
  const {
    data: relatedSeasons = [],
    isLoading,
    error,
  } = useRelatedAnime(malId ?? null);

  const stats = calculateTotalStats(anime, relatedSeasons);
  const verdict = calculateVerdict(stats);

  return (
    <div>
      <h3>{anime.title}</h3>
      <StyledVerdict verdict={verdict}>{verdict.message}</StyledVerdict>
      <p>
        Years: {anime.startDate} - {anime.endDate}
      </p>
      <p>Episodes: {anime.episodes}</p>
      <p>Status: {anime.status}</p>
      <p>Total hours: {anime.totalHours}</p>
      <p>Rating: {anime.rating}</p>

      <div className='total-stats'>
        <h4>Series Total Stats:</h4>
        <p>Total Episodes: {stats.totalEpisodes}</p>
        <p>Total Hours: {stats.totalHours}</p>
      </div>

      {isLoading && <p>Loading related seasons...</p>}
      {error && <p>Error loading related seasons</p>}
      {relatedSeasons && relatedSeasons.length > 0 && (
        <div>
          <h4>Related Seasons:</h4>
          {relatedSeasons.map((season, index) => (
            <div key={index} className='related-season'>
              <p>{season.title}</p>
              <p>Episodes: {season.episodes}</p>
              <p>Total hours: {season.totalHours}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
