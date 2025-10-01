
const movieListEl = document.querySelector(".movie-list");

async function main() {
  const movies = await fetch("https://omdbapi.com/?s=fast&apikey=d9398c17");
  const moviesData = await movies.json();
  console.log(moviesData);
  movieListEl.innerHTML = moviesData.Search.map((movies) =>
    moviesHTML(movies)
  ).join("");
}
main();

function moviesHTML(movies) {
  return ` <div class="movie-card">
              <div class="movie-card__container">
                <h3>${movies.Title}</h3>
                <p><b>Year:</b> ${movies.Year}</p>
              </div>
              <div class="movie-card__img--wrapper">
                <div class="movie-card__img">
                    <img src="${movies.Poster}" class="poster__img" alt="Movie Poster">
                </div>
              </div>
            </div>`;
}

