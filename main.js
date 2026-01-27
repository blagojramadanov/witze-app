import { fetchJoke } from "./fetch";
import { getSavedJokes, saveJoke, removeJoke } from "./storing.js";
import "./styles/main.scss";

const jokeText = document.querySelector(".current-joke__text");
const newJokeBtn = document.querySelector(".current-joke__create");
const saveJokeBtn = document.querySelector(".current-joke__save");
const savedJokesList = document.querySelector(".saved-jokes__list");
const categorySelect = document.getElementById("category");
const themeToggle = document.querySelector(".theme-toggle");

const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const icon = themeToggle.querySelector(".theme-toggle__icon");
  icon.style.transform = body.classList.contains("light-mode")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});

function renderSavedJoke(joke) {
  const div = document.createElement("div");
  div.className = "saved-joke";
  div.innerHTML = `
    <div class="saved-joke__text">${joke}</div>
    <button class="saved-joke__remove">
      <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="current-joke__delete-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        ></path>
      </svg>
    </button>
  `;
  savedJokesList.appendChild(div);

  const removeBtn = div.querySelector(".saved-joke__remove");
  removeBtn.addEventListener("click", () => {
    removeJoke(joke);
    div.remove();
  });
}

function loadSavedJokes() {
  const jokes = getSavedJokes();
  jokes.forEach(renderSavedJoke);
}

async function loadJoke() {
  const selectedCategory = categorySelect.value;
  const joke = await fetchJoke(selectedCategory);
  jokeText.innerText = joke;
  saveJokeBtn.classList.remove("current-joke__save--nonscreen");
}

newJokeBtn.addEventListener("click", loadJoke);

newJokeBtn.addEventListener("click", loadJoke);

saveJokeBtn.addEventListener("click", () => {
  const joke = jokeText.innerText;
  if (!joke) return;

  saveJoke(joke);
  renderSavedJoke(joke);
});

loadSavedJokes();
