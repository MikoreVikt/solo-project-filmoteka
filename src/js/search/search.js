import { fetchGenres } from '../gallery/gallery-render';
import { getGenreNames } from '../gallery/gallery-render';
import { createGalleryMarkup } from '../gallery/gallery-render';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';
let page;
let name;

const getEl = selector => document.querySelector(selector);

getEl('.search-form').addEventListener('submit', searchQuery);

function fetchSearch(page, name) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}&page=${page}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => error.status);
}

async function searchQuery(e) {
  e.preventDefault();
  getEl('.gallery').innerHTML = '';
  if (getEl('.search-form').elements.search.value === '') {
    return;
  } else {
    name = getEl('.search-form').elements.search.value;
  }
  const genresArr = await fetchGenres().then(data => data.genres);
  const filmsArr = await fetchSearch(page, name).then(data => data.results);
  getGenreNames(filmsArr, genresArr);
  createGalleryMarkup(filmsArr);
}
