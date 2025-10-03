

document.addEventListener('DOMContentLoaded', () => {
const movieListEl = document.querySelector(".movie-list");
const searchInput = document.querySelector('input[type="searchInput"]');
const placeholder = document.querySelector('.place-holder__img--wrapper');

console.log("movieListEl:" , movieListEl);

movieListEl.style.display = 'none';
placeholder.style.display = 'flex';

async function searchMovies() {
  const searchTerm = searchInput.value;
  if (!searchTerm) {
    alert('Please type a movie name.');
    return;
  }
  const movies = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=d9398c17`);
  const moviesData = await movies.json();
  console.log(moviesData);

  if (moviesData.Response === "True") {
    placeholder.style.display = 'none';
    movieListEl.style.display = 'flex';
    movieListEl.innerHTML = moviesData.Search.map((movies) => moviesHTML(movies))
  .join('');
  } else {
    alert('No movies found!')
  }
};

window.searchMovies = searchMovies;
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    searchMovies();
  }
});

function moviesHTML(movies) {
  return ` <div class="movie-card" >
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

});