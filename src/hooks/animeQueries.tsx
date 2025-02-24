import { useQuery } from "@tanstack/react-query";

export interface AnimeResult {
  title: string;
  image: string;
  rating: string;
  synopsis: string;
  episodes: number;
  status: string;
  episodeLength: number;
  totalHours: number;
  startDate: string;
  endDate: string;
  relatedSeasons?: AnimeResult[];
}

export interface JikanAnimeData {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  score: number;
  synopsis: string;
  status: string;
  episodes: number;
  duration: string;
  year: number;
  aired: {
    from: string;
    to: string;
  };
}

export interface RelationEntry {
  type: string;
  mal_id: number;
  name?: string;
}

export interface RelationData {
  relation: string;
  entry: Array<{
    type: string;
    mal_id: number;
  }>;
}

export interface TotalStats {
  totalEpisodes: number;
  totalMinutes: number;
  totalHours: number;
  status: string;
}

export interface VerdictResults {
  message: string;
  color: string;
}

const extractMinutes = (duration: string): number => {
  if (!duration) return 0;
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[0]) : 0;
};

const transformAnimeData = (animeData: JikanAnimeData): AnimeResult => {
  const episodeLength = extractMinutes(animeData.duration || "0 min");
  return {
    title: animeData.title || "Unknown Title",
    image: animeData.images?.jpg?.large_image_url || "",
    rating: animeData.score?.toString() || "N/A",
    synopsis: animeData.synopsis || "",
    episodes: animeData.episodes || 0,
    status: animeData.status || "Unknown",
    episodeLength: episodeLength,
    totalHours: Math.round((animeData.episodes * episodeLength) / 60) || 0,
    startDate: animeData.aired?.from
      ? new Date(animeData.aired.from).getFullYear().toString()
      : "N/A",
    endDate: animeData.aired?.to
      ? new Date(animeData.aired.to).getFullYear().toString()
      : "N/A",
  };
};

export const useSearchAnime = (searchTerm: string) => {
  return useQuery({
    queryKey: ["animeSearch", searchTerm],
    queryFn: async () => {
      if (!searchTerm) return [];
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=5`
      );
      const json = await response.json();
      return json.data.map(transformAnimeData);
    },
    enabled: searchTerm.length > 0,
  });
};

export const useAnimeDetails = (malId: number | null) => {
  return useQuery({
    queryKey: ["animeDetails", malId],
    queryFn: async () => {
      if (!malId) return null;
      const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
      const json = await response.json();
      return transformAnimeData(json.data);
    },
    enabled: !!malId,
  });
};

export const useRelatedAnime = (malId: number | null) => {
  return useQuery({
    queryKey: ["relatedAnime", malId],
    queryFn: async () => {
      if (!malId) return [];

      const relationsResponse = await fetch(
        `https://api.jikan.moe/v4/anime/${malId}/relations`
      );
      const relationsJson = await relationsResponse.json();

      const relatedAnimeIds = relationsJson.data
        .filter((relation: RelationData) =>
          [
            "Sequel",
            "Prequel",
            "Side Story",
            "Alternative",
            "Alternative version",
          ].includes(relation.relation)
        )
        .flatMap((relation: RelationData) =>
          relation.entry
            .filter((entry: RelationEntry) => entry.type === "anime")
            .map((entry: RelationEntry) => entry.mal_id)
        );

      const seasons = await Promise.all(
        relatedAnimeIds.map(async (id: number) => {
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Rate limiting
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
          const json = await response.json();
          return transformAnimeData(json.data);
        })
      );

      return seasons;
    },
    enabled: !!malId,
  });
};

export const calculateTotalStats = (
  mainAnime: AnimeResult,
  relatedSeasons: AnimeResult[]
): TotalStats => {
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
};

export const calculateVerdict = (stats: TotalStats): VerdictResults => {
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
};
