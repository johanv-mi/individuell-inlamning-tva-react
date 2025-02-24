export async function showData(query: string) {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime?filter[text]=${query}`,

    {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    }
  );
  const shows = await response.json();
  return shows;
}
