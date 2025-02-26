import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../ApiData";
import {
  StyledAnimeCard,
  StyledAnimeImage,
  StyledAnimeTitle,
  StyledRatingContainer,
  StyledRatingMax,
  StyledRatingValue,
  StyledShowCardGrid,
} from "./styles/DiscoverPage.styled";

interface KitsuAnimeData {
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

interface AnimeShow {
  id: string;
  title: string;
  image_url: string;
  rating: string;
}

const useTrendingAnime = () => {
  return useQuery<AnimeShow[]>({
    queryKey: ["trendingAnime"],
    queryFn: async () => {
      const data = await getTrending();
      return data.data.map((show: KitsuAnimeData) => ({
        id: show.id,
        title: show.attributes.canonicalTitle,
        image_url:
          show.attributes.posterImage?.medium ||
          show.attributes.posterImage?.original ||
          "",
        rating: show.attributes.averageRating
          ? (parseFloat(show.attributes.averageRating) / 10).toFixed(1)
          : "N/A",
      }));
    },
  });
};

export default function ShowCard() {
  const { data: trendingShows, isLoading, error } = useTrendingAnime();

  if (isLoading) return <div>Loading trending anime...</div>;
  if (error) return <div>Error loading anime: {(error as Error).message}</div>;
  if (!trendingShows) return <div>No trending anime found</div>;

  return (
    <StyledShowCardGrid>
      {trendingShows.slice(0, 10).map((show) => (
        <StyledAnimeCard key={show.id}>
          <StyledAnimeImage src={show.image_url} alt={`${show.title} poster`} />
          <StyledAnimeTitle>{show.title}</StyledAnimeTitle>
          <StyledRatingContainer>
            <StyledRatingValue>{show.rating}</StyledRatingValue>
            {show.rating !== "N/A" && <StyledRatingMax>/10</StyledRatingMax>}
          </StyledRatingContainer>
        </StyledAnimeCard>
      ))}
    </StyledShowCardGrid>
  );
}
