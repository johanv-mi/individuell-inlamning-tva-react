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

export interface KitsuAnimeData {
  id: string;
  type: string;
  attributes: {
    canonicalTitle: string;
    averageRating: string | null;
    posterImage: {
      tiny?: string;
      small?: string;
      medium?: string;
      large?: string;
      original?: string;
    } | null;
  };
}

export interface RelationEntry {
  type: string;
  mal_id: number;
  name?: string;
}

export interface RelationData {
  relation: string;
  entry: RelationEntry[];
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
