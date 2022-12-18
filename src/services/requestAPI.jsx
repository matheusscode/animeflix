export const requestAPI = async () => {
  let url = "https://api-animes-go.onrender.com/animes";

  const response = await fetch( url, { method: "GET" });
  const results = await response.json()

  return results
};
