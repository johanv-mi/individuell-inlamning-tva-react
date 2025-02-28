import { useQuery } from "@tanstack/react-query";
import {
  fetchAnimeDetails,
  fetchAnimeSearch,
  fetchRelatedAnime,
} from "../api/anime";
import { AnimeResult, JikanAnimeData } from "../types/anime";

export function useSearchAnime(searchTerm: string) {
  return useQuery({
    queryKey: ["animeSearch", searchTerm],
    queryFn: () => fetchAnimeSearch(searchTerm),
    enabled: searchTerm.length > 0,
    staleTime: 1000 * 60 * 5,
  });
}

function extractMinutes(duration: string): number {
  if (!duration) return 0;
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[0]) : 0;
}

export function useAnimeDetails(malId: number | null) {
  return useQuery({
    queryKey: ["animeDetails", malId],
    queryFn: () => fetchAnimeDetails(malId as number),
    enabled: !!malId,
    staleTime: 1000 * 60 * 60,
  });
}

export function useRelatedAnime(malId: number | null) {
  return useQuery({
    queryKey: ["relatedAnime", malId],
    queryFn: () => fetchRelatedAnime(malId as number),
    enabled: !!malId,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
}

export function transformAnimeData(animeData: JikanAnimeData): AnimeResult {
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
}
