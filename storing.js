const STORAGE_KEY = "savedJokes";

export function getSavedJokes() {
  const jokes = localStorage.getItem(STORAGE_KEY);
  if (!jokes) return [];
  try {
    return JSON.parse(jokes);
  } catch (e) {
    return [];
  }
}

export function saveJoke(joke) {
  const jokes = getSavedJokes();
  if (!jokes.includes(joke)) {
    jokes.push(joke);
    localStorage.setItem("savedJokes", JSON.stringify(jokes));
  }
}

export function removeJoke(joke) {
  let jokes = getSavedJokes();
  jokes = jokes.filter((j) => j !== joke);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
}

export function clearAllJokes() {
  localStorage.removeItem(STORAGE_KEY);
}
