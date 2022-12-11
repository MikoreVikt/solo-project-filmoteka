import { createGallery } from '../gallery/gallery-render';
import { searchQuery } from '../search/search';

const getEl = selector => document.querySelector(selector);
let page = Number(localStorage.getItem('current-page-number')) || 1;

getEl('.pagination__btn-wrap').addEventListener('click', clickOnBtnNum);
getEl('.pagination__btn.prev').addEventListener('click', clickOnArrowBtnPrev);
getEl('.pagination__btn.next').addEventListener('click', clickOnArrowBtnNext);

activePage();
validFirstBtn(page);

function clickOnArrowBtnPrev() {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn =
    document.querySelector('.current-page') ||
    Number(localStorage.getItem('current-page-number'));
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  if (Number(currentActiveBtn.textContent) !== Number(1)) {
    const pageNum = Number(currentActiveBtn.textContent) - 1;
    localStorage.setItem('current-page-number', pageNum);
    currentActiveBtn.previousElementSibling.classList.add('current-page');
  } else {
    const pageNum = 1;
    localStorage.setItem('current-page-number', pageNum);
    currentActiveBtn.classList.add('current-page');
  }
  validFirstBtn(Number(localStorage.getItem('current-page-number')) || 1);
  createPrevBtn();
  activePage();
  if (localStorage.getItem('current-memory-search')) {
    searchQuery(
      Number(localStorage.getItem('current-page-number')) || 1,
      localStorage.getItem('current-memory-search')
    );
  } else {
    createGallery(Number(localStorage.getItem('current-page-number')) || 1);
  }
}

function clickOnArrowBtnNext() {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn =
    document.querySelector('.current-page') ||
    Number(localStorage.getItem('current-page-number'));
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  currentActiveBtn.nextElementSibling.classList.add('current-page');
  const pageNum = Number(currentActiveBtn.textContent) + 1;
  localStorage.setItem('current-page-number', pageNum);
  validFirstBtn(Number(localStorage.getItem('current-page-number')) || 1);
  createNextBtn();
  activePage();
  if (localStorage.getItem('current-memory-search')) {
    searchQuery(
      Number(localStorage.getItem('current-page-number')) || 1,
      localStorage.getItem('current-memory-search')
    );
  } else {
    createGallery(Number(localStorage.getItem('current-page-number')) || 1);
  }
}

function clickOnBtnNum(e) {
  getEl('.gallery').innerHTML = '';
  const currentActiveBtn = document.querySelector('.current-page');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('current-page');
  }
  e.target.classList.add('current-page');
  page = e.target.textContent;
  localStorage.setItem('current-page-number', page);
  validFirstBtn(Number(localStorage.getItem('current-page-number')) || 1);
  createPrevBtn();
  createNextBtn();
  activePage();
  if (localStorage.getItem('current-memory-search')) {
    searchQuery(
      Number(localStorage.getItem('current-page-number')) || 1,
      localStorage.getItem('current-memory-search')
    );
  } else {
    createGallery(Number(localStorage.getItem('current-page-number')) || 1);
  }
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

export function validFirstBtn(page) {
  if (Number(page) === 1) {
    getEl('.pagination__btn.prev').classList.add('not-active');
  } else {
    getEl('.pagination__btn.prev').classList.remove('not-active');
  }
}

export function activePage() {
  const locPageNum = localStorage.getItem('current-page-number');
  const btnArr = document.querySelectorAll('.pagination__btn.num');
  const currentActiveBtn = document.querySelector('.current-page');
  const btnNumText = [...btnArr].find(
    btn => Number(btn.textContent) === Number(locPageNum)
  );
  if (currentActiveBtn && btnNumText) {
    currentActiveBtn.classList.remove('current-page');
    btnNumText.classList.add('current-page');
  }
}
