import { fetchGenres } from '../gallery/gallery-render';
import { getGenreNames } from '../gallery/gallery-render';
import { createGalleryMarkup } from '../gallery/gallery-render';
import { createGallery } from '../gallery/gallery-render';
import { activePage } from '../pagination/pagination';
import { validFirstBtn } from '../pagination/pagination';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';
let page;
let name;

const getEl = selector => document.querySelector(selector);

getEl('.search-form').addEventListener('submit', onSubmit);

galleryFromMemory();

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

export async function searchQuery(page, name) {
  getEl('.gallery').innerHTML = '';
  const genresArr = await fetchGenres().then(data => data.genres);
  const filmsArr = await fetchSearch(page, name).then(data => data.results);
  getGenreNames(filmsArr, genresArr);
  createGalleryMarkup(filmsArr);
}

function onSubmit(e) {
  e.preventDefault();
  page = 1;
  localStorage.setItem('current-page-number', page);
  if (getEl('.search-form').elements.search.value === '') {
    return;
  } else {
    name = getEl('.search-form').elements.search.value;
    localStorage.setItem('current-memory-search', name);
  }
  validFirstBtn(page);
  activePage();
  searchQuery(page, name);
}

export function galleryFromMemory() {
  if (localStorage.getItem('current-memory-search')) {
    searchQuery(
      Number(localStorage.getItem('current-page-number')) || 1,
      localStorage.getItem('current-memory-search')
    );
  } else {
    createGallery(Number(localStorage.getItem('current-page-number')) || 1);
  }
}
