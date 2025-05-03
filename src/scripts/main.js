'use strict';

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const bigImage = document.querySelector('#largeImg');

  bigImage.src = e.target.parentElement.href;
});
