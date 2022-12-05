const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14ce8915ef52d801924d89668f2ca827';
const HTTPS_IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original';

const getEl = selector => document.querySelector(selector);

getEl('.gallery').addEventListener('click', onPosterClick);
getEl('.modal__btn-close').addEventListener('click', closeModal);
getEl('.backdrop').addEventListener('click', onBackdropClick);

function getMovieDetails(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

function onPosterClick(e) {
  e.preventDefault();
  if (
    (!e.target.closest('li') && !e.target.classList.contains('item')) ||
    e.target.classList.contains('gallery')
  ) {
    return;
  }
  const idValue = e.target.closest('li').dataset.id;
  getMovieDetails(idValue).then(data => {
    createPosterMarkup(data);
  });
  openModal();
}

function openModal() {
  document.addEventListener('keydown', onEscPress);
  getEl('.backdrop').classList.remove('is-hidden');
  getEl('body').classList.add('no-scroll');
}

function closeModal() {
  document.removeEventListener('keydown', onEscPress);
  getEl('.backdrop').classList.add('is-hidden');
  getEl('body').classList.remove('no-scroll');
  getEl('.modal__window').innerHTML = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function createPosterMarkup({
  id,
  original_title,
  overview,
  poster_path,
  popularity,
  vote_average,
  vote_count,
  genres,
}) {
  src = HTTPS_IMG_ORIGINAL + poster_path;
  const popular = Math.round(popularity);
  const genresName = genres.map(genre => genre.name).join(', ');
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
                            <li class="modal__text-characteristic-value">${genresName}</li>
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
