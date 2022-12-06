const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';
const HTTPS_IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original';
let page = 1;
let src;

const getEl = selector => document.querySelector(selector);

createGallery(page);

function fetchAPI(page) {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => error.status);
}

function fetchGenres() {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => error.status);
}

function getGenreNames(filmsArr, genresArr) {
  filmsArr.forEach(film => {
    const names = film.genre_ids.map(id => {
      const objId = genresArr.find(genre => genre.id === id);
      return objId ? objId.name : 'Unknown';
    });
    film.genres =
      names.length < 3
        ? names.join(', ')
        : `${names[0]}, ${names[1]} and other`;
  });
}

function createGalleryMarkup(data) {
  return data
    .map(({ id, poster_path, original_title, release_date, genres }) => {
      const relise = release_date.slice(0, 4);
      src = HTTPS_IMG_ORIGINAL + poster_path;
      const markup = `
        <li class="item" data-id="${id}">
            <a class="item__link" href="">
            <div class="item__img-frame">
                <img
                class="item__img"
                data-id="${id}"
                src=${src}
                alt="${original_title}"
                loading="lazy"
                />
            </div>
            <div class="item__text-frame">
                <h3 class="item__text title">${original_title}</h3>
                <h3 class="item__text">${genres} | ${relise}</h3>
            </div>
            </a>
        </li>`;
      getEl('.gallery').insertAdjacentHTML('beforeend', markup);
    })
    .join('');
}

export async function createGallery(page) {
  const genresArr = await fetchGenres().then(data => data.genres);
  const filmsArr = await fetchAPI(page).then(data => data.results);
  getGenreNames(filmsArr, genresArr);
  createGalleryMarkup(filmsArr);
}
