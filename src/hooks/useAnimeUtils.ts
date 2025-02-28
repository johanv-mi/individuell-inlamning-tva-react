import { AnimeResult, TotalStats, VerdictResults } from "../types/anime";

export function calculateTotalStats(
  mainAnime: AnimeResult,
  relatedSeasons: AnimeResult[]
): TotalStats {
  const allAnime = [mainAnime, ...(relatedSeasons || [])];

  return {
    totalEpisodes: allAnime.reduce(
      (sum, anime) => sum + (anime.episodes || 0),
      0
    ),
    totalMinutes: allAnime.reduce(
      (sum, anime) => sum + (anime.episodes || 0) * (anime.episodeLength || 0),
      0
    ),
    totalHours: allAnime.reduce(
      (sum, anime) => sum + (anime.totalHours || 0),
      0
    ),
    status: mainAnime.status,
  };
}

export function calculateVerdict(stats: TotalStats): VerdictResults {
  const { totalHours, totalEpisodes, status } = stats;

  if (totalHours === 0 || totalEpisodes === 0) {
    return { message: "No data available for this series", color: "#FF4444" };
  }

  if (totalHours > 100 && status !== "Finished Airing") {
    return {
      message: "This one could literally go on forever",
      color: "#FF4444",
    };
  }

  if (totalHours > 50) {
    return {
      message: "This is a substantial series. Perfect for a season binge!",
      color: "#fc44ff",
    };
  }

  if (totalHours > 24) {
    return {
      message:
        "A medium-length series. Good for a few weeks of regular watching.",
      color: "#45ffd7",
    };
  }

  if (totalHours > 12) {
    return {
      message: "A shorter series. Could be finished in a weekend marathon!",
      color: "#30ff25",
    };
  }

  return {
    message: "Quick watch! Perfect for a day of binging.",
    color: "#30ff25",
  };
}
