import { StyledVerdict } from "../Components/styles/GetInToItPage.styled";
import {
  AnimeResult,
  calculateTotalStats,
  calculateVerdict,
} from "../hooks/animeQueries";

interface AnimeDetailsProps {
  anime: AnimeResult;
  relatedSeasons?: AnimeResult[];
}

export const AnimeDetails = ({ anime, relatedSeasons }: AnimeDetailsProps) => {
  const stats = calculateTotalStats(anime, relatedSeasons || []);
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

      <div>
        <h4>Series Total Stats:</h4>
        <p>Total Episodes: {stats.totalEpisodes}</p>
        <p>Total Hours: {Math.round(stats.totalMinutes / 60)}</p>
      </div>

      {relatedSeasons && relatedSeasons.length > 0 && (
        <div>
          <h4>Related Seasons:</h4>
          {relatedSeasons.map((season, index) => (
            <div key={index}>
              <p>{season.title}</p>
              <p>Episodes: {season.episodes}</p>
              <p>Total hours: {season.totalHours}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
