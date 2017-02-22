'use strict';

const email = document.querySelector('.content--link.email');

email.addEventListener('click', () => {
  const select = window.getSelection();
  let   range  = document.createRange();

  range.selectNodeContents(email);
  select.addRange(range);
});
