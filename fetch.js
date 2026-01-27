export async function fetchJoke(category) {
  const url = `https://witzapi.de/api/joke?category=${category}`;
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);

  if (!data || data.length === 0) return "Kein Witz";

  return data[0].text;
}
