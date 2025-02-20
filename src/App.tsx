import { useQuery } from "@tanstack/react-query";
import { getAnimeData } from "./ApiData";

export default function App() {
  const { data } = useQuery({
    queryKey: ["animeData"],
    queryFn: getAnimeData,
  });

  return (
    <div>
      {data?.data?.map((anime) => (
        <div key={anime.mal_id}>
          <h3>{anime.title}</h3>
          <img src={anime.images.jpg.image_url} alt={anime.title} />)
        </div>
      ))}
    </div>
  );
}
