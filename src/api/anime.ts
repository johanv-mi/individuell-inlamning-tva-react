import { transformAnimeData } from "../hooks/useAnimeData";
import { AnimeResult, RelationData, RelationEntry } from "../types/anime";

export async function getTrending() {
  const response = await fetch("https://kitsu.io/api/edge/trending/anime", {
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchAnimeSearch(
  searchTerm: string
): Promise<AnimeResult[]> {
  if (!searchTerm) return [];
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=5`
  );
  const json = await response.json();
  return json.data.map(transformAnimeData);
}

export async function fetchAnimeDetails(
  malId: number
): Promise<AnimeResult | null> {
  if (!malId) return null;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
  const json = await response.json();
  return transformAnimeData(json.data);
}

export async function fetchRelatedAnime(malId: number): Promise<AnimeResult[]> {
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

  const seasons = [];
  for (const id of relatedAnimeIds) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Rate limiting
    const animeDetails = await fetchAnimeDetails(id);
    if (animeDetails) {
      seasons.push(animeDetails);
    }
  }

  return seasons;
}
