const API_ENDPOINT = "https://witzapi.de/api/joke";

export async function fetchJoke() {
  const result = await fetch(API_ENDPOINT);
  const data = await result.json();
  console.log(data);

  return data[0].text;
}
