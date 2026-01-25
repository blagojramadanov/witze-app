import { fetchJoke } from "./fetch";
import "./styles/main.scss";

const jokeText = document.querySelector(".current-joke__text");
const newJokeBtn = document.querySelector(".current-joke__create");

async function loadJoke() {
  jokeText.innerText = "Loading...";

  const joke = await fetchJoke();
  jokeText.innerText = joke;
}

newJokeBtn.addEventListener("click", loadJoke);
