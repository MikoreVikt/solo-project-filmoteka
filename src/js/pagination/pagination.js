import { createGallery } from '../gallery/gallery-render';

const getEl = selector => document.querySelector(selector);
let page = 1;

getEl('.pagination__btn-wrap').addEventListener('click', clickOnBtnNum);
getEl('.pagination__btn.prev').addEventListener('click', clickOnArrowBtnPrev);
getEl('.pagination__btn.next').addEventListener('click', clickOnArrowBtnNext);

function clickOnArrowBtnPrev() {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn = document.querySelector('.current-page');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  currentActiveBtn.previousElementSibling.classList.add('current-page');
  const pageNum = Number(currentActiveBtn.textContent) - 1;
  validation(pageNum);
  createPrevBtn();
  createGallery(pageNum);
}

function clickOnArrowBtnNext() {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn = document.querySelector('.current-page');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  currentActiveBtn.nextElementSibling.classList.add('current-page');
  const pageNum = Number(currentActiveBtn.textContent) + 1;
  validation(pageNum);
  createNextBtn();
  createGallery(pageNum);
}

function clickOnBtnNum(e) {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn = document.querySelector('.current-page');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  e.target.classList.add('current-page');
  page = e.target.textContent;
  validation(page);
  createPrevBtn();
  createNextBtn();
  createGallery(page);
}

function createPrevBtn() {
  const firstEl = getEl('.pagination__btn-wrap').firstElementChild;
  const lastEl = getEl('.pagination__btn-wrap').lastElementChild;
  const prevBtnIdx = Number(firstEl.dataset.index) - 1;
  const prevBtnNum = prevBtnIdx + 1;
  if (
    firstEl.classList.contains('current-page') &&
    Number(firstEl.dataset.index) !== 0
  ) {
    lastEl.remove();
    const prevBtnMarkup = `<button class="pagination__btn num" tupe="button" data-index="${prevBtnIdx}">${prevBtnNum}</button>`;
    getEl('.pagination__btn-wrap').insertAdjacentHTML(
      'afterbegin',
      prevBtnMarkup
    );
  }
}

function createNextBtn() {
  const firstEl = getEl('.pagination__btn-wrap').firstElementChild;
  const lastEl = getEl('.pagination__btn-wrap').lastElementChild;
  const nextBtnIdx = Number(lastEl.dataset.index) + 1;
  const nextBtnNum = Number(nextBtnIdx) + Number(1);
  if (lastEl.classList.contains('current-page')) {
    firstEl.remove();
    const nextBtnMarkup = `<button class="pagination__btn num" tupe="button" data-index="${nextBtnIdx}">${nextBtnNum}</button>`;
    getEl('.pagination__btn-wrap').insertAdjacentHTML(
      'beforeend',
      nextBtnMarkup
    );
  }
}

function validation(page) {
  if (Number(page) === 1) {
    getEl('.pagination__btn.prev').classList.add('not-active');
  } else {
    getEl('.pagination__btn.prev').classList.remove('not-active');
  }
}
