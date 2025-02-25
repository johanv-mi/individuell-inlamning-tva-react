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
