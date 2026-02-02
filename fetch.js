export async function fetchJoke(category) {
  let url;

  if (category) {
    url = `https://witzapi.de/api/joke?category=${category}`;
  } else {
    url = `https://witzapi.de/api/joke`;
  }

  const result = await fetch(url);
  const data = await result.json();

  if (!data || data.length === 0) return "Kein Witz ";

  return data[0].text;
}
