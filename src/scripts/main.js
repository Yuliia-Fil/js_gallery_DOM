'use strict';

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'A' && e.target.tagName !== 'IMG') {
    return;
  }

  const bigImage = document.querySelector('#largeImg');

  if (e.target.tagName === 'IMG') {
    bigImage.src = e.target.parentElement.href;
  } else {
    bigImage.src = e.target.href;
  }
});
