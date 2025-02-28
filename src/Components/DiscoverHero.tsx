import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../api/anime";
import { StyledChangeHeroFunc } from "./styles/DiscoverPage.styled";

export function DiscoverHero() {
  const { data } = useQuery({
    queryKey: ["animeData"],
    queryFn: getTrending,
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const pictures = [
    data?.data[0]?.attributes?.posterImage?.original,
    data?.data[1]?.attributes?.posterImage?.original,
    data?.data[2]?.attributes?.posterImage?.original,
    data?.data[3]?.attributes?.posterImage?.original,
    data?.data[4]?.attributes?.posterImage?.original,
    data?.data[5]?.attributes?.posterImage?.original,
    data?.data[6]?.attributes?.posterImage?.original,
    data?.data[7]?.attributes?.posterImage?.original,
    data?.data[8]?.attributes?.posterImage?.original,
  ];
  const titles = [
    data?.data[0]?.attributes?.canonicalTitle,
    data?.data[1]?.attributes?.canonicalTitle,
    data?.data[2]?.attributes?.canonicalTitle,
    data?.data[3]?.attributes?.canonicalTitle,
    data?.data[4]?.attributes?.canonicalTitle,
    data?.data[5]?.attributes?.canonicalTitle,
    data?.data[6]?.attributes?.canonicalTitle,
    data?.data[7]?.attributes?.canonicalTitle,
    data?.data[8]?.attributes?.canonicalTitle,
  ];
  const synopses = [
    data?.data[0]?.attributes?.synopsis,
    data?.data[1]?.attributes?.synopsis,
    data?.data[2]?.attributes?.synopsis,
    data?.data[3]?.attributes?.synopsis,
    data?.data[4]?.attributes?.synopsis,
    data?.data[5]?.attributes?.synopsis,
    data?.data[6]?.attributes?.synopsis,
    data?.data[7]?.attributes?.synopsis,
    data?.data[8]?.attributes?.synopsis,
  ];
  const ratings = [
    data?.data[0]?.attributes?.averageRating,
    data?.data[1]?.attributes?.averageRating,
    data?.data[2]?.attributes?.averageRating,
    data?.data[3]?.attributes?.averageRating,
    data?.data[4]?.attributes?.averageRating,
    data?.data[5]?.attributes?.averageRating,
    data?.data[6]?.attributes?.averageRating,
    data?.data[7]?.attributes?.averageRating,
    data?.data[8]?.attributes?.averageRating,
  ];

  return (
    <div className='hero-container'>
      {pictures?.length > 0 && (
        <StyledChangeHeroFunc
          pictures={pictures}
          titles={titles}
          synopses={synopses}
          ratings={ratings}
        />
      )}
    </div>
  );
}
