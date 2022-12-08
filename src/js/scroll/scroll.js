const getEl = selector => document.querySelector(selector);
let timeOut;

window.addEventListener('scroll', showBtn);
getEl('.scroll__btn').addEventListener('click', scrollUp);

function showBtn() {
  if (Math.round(document.documentElement.scrollTop) > 230) {
    timeOut = setTimeout(() => {
      setTimeout(() => {
        if (Math.round(document.documentElement.scrollTop) > 230) {
          getEl('.scroll__btn').classList.remove('is-hidden');
        }
      }, 1);
    }, 1000);
  } else {
    getEl('.scroll__btn').classList.add('is-hidden');
    clearTimeout(timeOut);
  }
}

export function scrollUp() {
  getEl('.scroll__btn').classList.add('is-hidden');
  if (document.documentElement.scrollTop > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
