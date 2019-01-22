'use strict';

import tracks from './lib/tracks';
import Audio from './lib/audio';

const node = document.querySelector('.mosaic-player');
const mosaic = new Audio(node, tracks); // eslint-disable-line no-unused-vars
const scrollBar = document.querySelector('.mosaic-scroll-bar');
const scrollBarHead = document.querySelector('.mosaic-scroll-bar-head');

// scroll bar

const getDocumentHeight = () => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
};

let documentHeight = getDocumentHeight();
const scrollBarHeight = scrollBar.offsetHeight;

const percentageOfPageToScrollBarPixels = currentHeight => {
    const percentageOfPageScrolled = currentHeight / documentHeight;

    console.log(percentageOfPageScrolled);
    return scrollBarHeight * percentageOfPageScrolled;
};

const calculateScrollBarHeadMargin = () => {
    const currentHeight = window.pageYOffset;

    scrollBarHead.style.marginTop = percentageOfPageToScrollBarPixels(currentHeight) + 'px';
}

window.addEventListener('scroll', calculateScrollBarHeadMargin);

window.addEventListener('resize', () => {
    documentHeight = getDocumentHeight();
    calculateScrollBarHeadMargin();
});