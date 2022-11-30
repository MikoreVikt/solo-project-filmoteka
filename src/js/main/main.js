const galleryRef = document.querySelector('.gallery');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';

let page = 1;
let imgHttps = 'https://image.tmdb.org/t/p/w500/';

async function createGallery(page) {
  try {
    const genresArr = await getGenres().then(data => data.genres);
    const filmsArr = await getApi(page).then(data => data.results);
    createGenres(filmsArr, genresArr);
    validationData(filmsArr);
    createMarkup(filmsArr);
  } catch (error) {
    createError();
  }
}

createGallery(page);

function getApi(page) {
  return fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function getGenres() {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function createMarkup(data) {
  const markup = data
    .map(
      ({ id, poster_path, title, genre_name, release_date, vote_average }) => {
        const date = release_date.slice(0, 4);
        const rating = vote_average.toFixed(1);
        const src = imgHttps + poster_path;
        return `
            <li class="item">
                <a class="item__link" href="">
                <div class="item__img-frame">
                    <img
                    class="item__img"
                    data-id="${id}"
                    src=${src}
                    alt="${title}"
                    loading="lazy"
                    />
                </div>
                <div class="item__text-frame">
                    <h3 class="item__text title">${title}</h3>
                    <h3 class="item__text">${genre_name} | ${date}</h3>
                </div>
                </a>
            </li>
            `;
      }
    )
    .join(``);
  galleryRef.innerHTML = markup;
}

function createGenres(films, genres) {
  films.forEach(film => {
    const names = film.genre_ids.map(id => {
      const genreObj = genres.find(genre => genre.id === id);

      return genreObj ? genreObj.name : 'Unknown';
    });

    film.genre_name =
      names.length < 3 ? names.join(', ') : `${names[0]}, ${names[1]}, other`;
  });
}

function createError() {
  galleryRef.innerHTML = `
  <section>
      <p>Error</p>
      <p>Oops, something went wrong. Please try again later.</p>
    </section>`;
}

function validationData(films) {
  films.forEach(film => {
    if (!film.poster_path) {
      imgHttps = './default-img.jpg';
    }
    if (!film.release_date) {
      film.release_date = '';
    }
    if (film.vote_average < 0 || film.vote_average > 10) {
      film.vote_average = 0;
    }
  });
}
