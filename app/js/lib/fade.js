'use strict';

function fadeIn(element, int, speed) {
  let opacity = 0.1;

  setTimeout(() => {
    let timer = setInterval(function () {
      if (opacity >= 1) {
          clearInterval(timer);
      };

      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
      opacity += opacity * 0.1;
    }, int);
  }, speed)
};

function extend(e, w) {
  e.style.width = parseInt(w) + '%';
};

window.onload    = () => {
  const body     = document.querySelector('body');
  const hero     = body.children[0].children[0].children[0].children[1];
  const title    = hero.children[0];
  const subtitle = title.children[0];
  const divider  = hero.children[1];
  const intro    = hero.children[2];
  const next     = hero.children[3];

  // refactor
  setTimeout(() => {
    fadeIn(body, 10);
    setTimeout(() => {
      fadeIn(title, 15);
      setTimeout(() => {
        fadeIn(subtitle, 15);
        setTimeout(() => {
          fadeIn(intro, 15);
          setTimeout(() => {
            extend(divider, 70);
            fadeIn(next, 15);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};
