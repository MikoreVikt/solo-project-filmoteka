const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';
const DEFAULT_IMG = 'https://i.ibb.co/3NkZfz9/moive1.jpg';
let IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';
let src;
const getEl = selector => document.querySelector(selector);

getEl(`.gallery`).addEventListener(`click`, onPosterClick);
getEl('.modal__btn-close').addEventListener('click', closeModal);
getEl('.backdrop').addEventListener('click', onBackdropClick);

function fetchId(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function onPosterClick(e) {
  e.preventDefault();
  if (
    !e.target.closest(`li`).classList.contains(`item`) ||
    e.target.classList.contains(`gallery`)
  ) {
    return;
  }
  const idValue = e.target.closest(`li`).dataset.id;
  fetchId(idValue).then(data => {
    createModalMarkup(data);
  });
  openModal();
}

function openModal() {
  document.addEventListener('keydown', onEscKeyPress);
  getEl(`.backdrop`).classList.remove(`is-hidden`);
  getEl(`body`).classList.add(`no-scroll`);
}

function closeModal() {
  document.removeEventListener('keydown', onEscKeyPress);
  getEl(`.backdrop`).classList.add(`is-hidden`);
  getEl(`body`).classList.remove(`no-scroll`);
}

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function createModalMarkup({
  id,
  poster_path,
  original_title,
  popularity,
  vote_average,
  vote_count,
  genres,
  overview,
}) {
  const genre = genres.map(obj => obj.name).join(', ');
  const popular = Math.round(popularity);
  if (poster_path !== DEFAULT_IMG) {
    src = IMG_HTTPS + poster_path;
  } else {
    src = DEFAULT_IMG;
  }
  const markup = `
    <div class="modal__container">
                <div class="modal__img-wrap">
                    <img class="modal__img" src="${src}" alt="${original_title}">
                </div>
                <div class="modal__about-movie">
                    <h3 class="modal__title" data-id="${id}">${original_title}</h3>
                    <div class="modal__text-wrap">
                        <ul>
                            <li class="modal__text-characteristic">Vote / Votes</li>
                            <li class="modal__text-characteristic-value"><span class="vote average">${vote_average}</span> / <span class="vote count">${vote_count}</span></li>
                        </ul>
                        <ul>
                            <li class="modal__text-characteristic">Popularity</li>
                            <li class="modal__text-characteristic-value">${popular}</li>
                        </ul>
                        <ul>
                            <li class="modal__text-characteristic">Original Title</li>
                            <li class="modal__text-characteristic-value">${original_title}</li>
                        </ul>
                        <ul>
                            <li class="modal__text-characteristic">Genre</li>
                            <li class="modal__text-characteristic-value">${genre}</li>
                        </ul>
                    </div>
                    <div class="modal__overview-wrap">
                        <h3 class="modal__overview-title">About</h3>
                        <p class="modal__overview-text">${overview}</p>
                    </div>
                    <div class="modal__btn-wrap">
                        <button class="modal__btn w" type="button">add to Watched</button>
                        <button class="modal__btn q" type="button">add to queue</button>
                    </div>
                </div>
            </div>
    `;
  getEl('.modal__window').innerHTML = markup;
}
