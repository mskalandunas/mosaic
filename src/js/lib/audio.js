'use strict';

const _util_      = require(__dirname + '/utilities');
const tracks      = require(__dirname + '/tracks');
const album       = tracks.length;
const node        = document.querySelector('.mosaic-player');
const current     = node.children[0].children[0].children[0].children[0];
const description = node.children[2];
const duration    = node.children[0].children[0].children[3];
const hover       = node.children[0].children[0].children[2].children[0];
const nextButton  = node.children[0].children[0].children[1].children[2];
const playButton  = node.children[0].children[0].children[1].children[1];
const playhead    = node.children[0].children[0].children[2].children[0].children[0];
const prevButton  = node.children[0].children[0].children[1].children[0];
const source      = node.children[0].children[0].children[0];
const timeline    = node.children[0].children[0].children[2];
const title       = node.children[1];
let scrubber      = false;
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

function addHover(e) {
  let positionOffset = _util_.handleOffsetParent(timeline);
  let newMargLeft = e.pageX - positionOffset;

  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    hover.style.width = `${newMargLeft}px`;
  };

  if (newMargLeft < 0) {
    hover.style.width = '0px';
  };

  if (newMargLeft > timelineWidth) {
    hover.style.width = `${timelineWidth}px`;
  };
};

function handleClick(e) {
  let positionOffset = _util_.handleOffsetParent(timeline);
  return (e.pageX - positionOffset) / timelineWidth;
};

function handleHover() {
  timeline.addEventListener('mousemove', addHover, false);
  timeline.addEventListener('mouseout', removeHover, false);
};

function handlePlayhead() {
  let playPercent = timelineWidth * (source.currentTime / source.duration);
  playhead.style.paddingLeft = `${playPercent}px`;
};

function mouseDown() {
  scrubber = true;
  source.removeEventListener('timeupdate', handlePlayhead, false);
};

function mouseUp(e) {
  if (scrubber === false) {
    return;
  };

  movePlayhead(e);
  window.removeEventListener('mousemove', movePlayhead, true);
  source.currentTime = source.duration * handleClick(e);
  source.addEventListener('timeupdate', handlePlayhead, false);
  scrubber = false;
};

function movePlayhead(e) {
  let positionOffset = _util_.handleOffsetParent(timeline);
  let newMargLeft = e.pageX - positionOffset;

  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    playhead.style.paddingLeft = `${newMargLeft}px`;
  };

  if (newMargLeft < 0) {
    playhead.style.paddingLeft = '0px';
  };

  if (newMargLeft > timelineWidth) {
    playhead.style.paddingLeft = `${timelineWidth}px`;
  };
};

function next() {
  let count = current.getAttribute('src')[6];

  if (count == album) {
    current.setAttribute('src', `audio/${tracks[0].src}.mp3`);
    title.innerHTML = tracks[0].title;
    description.innerHTML = tracks[0].description;
  } else {
    current.setAttribute('src', `audio/${tracks[count].src}.mp3`);
    title.innerHTML = tracks[count].title;
    description.innerHTML = tracks[count].description;
  };

  if (!source.paused) {
    source.pause();
    timeline.classList.toggle('active');
    playButton.children[0].classList = '';
    playButton.children[0].classList = 'fa fa-play';
  };

  source.load();
  playhead.style.paddingLeft = '0px';
};

function play() {
  if (source.paused) {
    source.play();
    timeline.classList.toggle('active');
    playButton.children[0].classList = '';
    playButton.children[0].classList = 'fa fa-pause';
  } else {
    source.pause();
    timeline.classList.toggle('active');
    playButton.children[0].classList = '';
    playButton.children[0].classList = 'fa fa-play';
  };
};

function previous() {
  let count = current.getAttribute('src')[6];
  if (count == 1) {
    current.setAttribute('src', `audio/${tracks[album - 1].src}.mp3`);
    title.innerHTML = tracks[album - 1].title;
    description.innerHTML = tracks[album - 1].description;
  } else {
    current.setAttribute('src', `audio/${tracks[count - 2].src}.mp3`);
    title.innerHTML = tracks[count - 2].title;
    description.innerHTML = tracks[count - 2].description;
  };

  if (!source.paused) {
    source.pause();
    timeline.classList.toggle('active');
    playButton.children[0].classList = '';
    playButton.children[0].classList = 'fa fa-play';
  };

  source.load();
  playhead.style.paddingLeft = '0px';
};

function removeHover() {
  hover.style.width = '0px';
};

function returnDuration() {
  duration.innerHTML = _util_.handleTime(source.duration);
  updateTime();
};

function updateTime() {
  duration.innerHTML = `${_util_.handleTime(source.currentTime)} / ${_util_.handleTime(source.duration)}`;

  if (source.currentTime === source.duration) {
    playButton.classList = '';
    playButton.classList = 'fa fa-play';
  };
};

nextButton.addEventListener('click', next);
playButton.addEventListener('click', play);
playhead.addEventListener('mousedown', mouseDown);
prevButton.addEventListener('click', previous);
source.addEventListener('durationchange', returnDuration);
source.addEventListener('timeupdate', updateTime);
source.addEventListener('timeupdate', handlePlayhead);
timeline.addEventListener('mousedown', mouseDown);
timeline.addEventListener('mouseover', handleHover);
window.addEventListener('mouseup', mouseUp);
