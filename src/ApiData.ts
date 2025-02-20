export async function getAnimeData() {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=naruto&limit=20`
  );
  const data = await response.json();
  return data;
}

interface JikanResponse {
  //all the data  does in here then type it
}
