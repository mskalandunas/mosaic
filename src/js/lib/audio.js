'use strict';

const _util_ = require(__dirname + '/utilities');

class Ao {
  constructor(node) {
    this.node          = node;
    this.duration      = node.children[0].children[0].children[3];
    this.hover         = node.children[0].children[0].children[2].children[0];
    this.playButton    = node.children[0].children[0].children[1].children[1];
    this.playhead      = node.children[0].children[0].children[2].children[0].children[0];
    this.scrubber      = false;
    this.source        = node.children[0].children[0].children[0];
    this.timeline      = node.children[0].children[0].children[2];
    this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;

    this.playButton.addEventListener('click', this.play.bind(this));
    this.playhead.addEventListener('mousedown', this.mouseDown.bind(this));
    this.source.addEventListener('durationchange', this.returnDuration.bind(this));
    this.source.addEventListener('timeupdate', this.updateTime.bind(this));
    this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this));
    this.timeline.addEventListener('mousedown', this.mouseDown.bind(this));
    this.timeline.addEventListener('mouseover', this.handleHover.bind(this));
    window.addEventListener('mouseup', this.mouseUp.bind(this));
  };

  addHover(e) {
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    let newMargLeft = e.pageX - positionOffset;

    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
      this.hover.style.width = `${newMargLeft}px`;
    };

    if (newMargLeft < 0) {
      this.hover.style.width = '0px';
    };

    if (newMargLeft > this.timelineWidth) {
      this.hover.style.width = `${this.timelineWidth}px`;
    };
  };

  handleClick(e) {
    console.log('handle click');
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    return (e.pageX - positionOffset) / this.timelineWidth;
  };

  handleHover() {
    console.log('handle hover');
    this.timeline.addEventListener('mousemove', this.addHover.bind(this), false);
    this.timeline.addEventListener('mouseout', this.removeHover.bind(this), false);
  };

  handlePlayhead() {
    console.log('handle playhead');
    let playPercent = this.timelineWidth * (this.source.currentTime / this.source.duration);
    this.playhead.style.paddingLeft = `${playPercent}px`;
  };

  mouseDown() {
    this.scrubber = true;
    this.source.removeEventListener('timeupdate', this.handlePlayhead.bind(this), false);
  };

  mouseUp(e) {
    if (this.scrubber === false) {
      return;
    };

    this.movePlayhead(e);
    window.removeEventListener('mousemove', this.movePlayhead.bind(this), true);
    this.source.currentTime = this.source.duration * this.handleClick(e);
    this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this), false);
    this.scrubber = false;
  };

  movePlayhead(e) {
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    let newMargLeft = e.pageX - positionOffset;

    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
      this.playhead.style.paddingLeft = `${newMargLeft}px`;
    };

    if (newMargLeft < 0) {
      this.playhead.style.paddingLeft = '0px';
    };

    if (newMargLeft > this.timelineWidth) {
      this.playhead.style.paddingLeft = `${this.timelineWidth}px`;
    };
  };

  play() {
    if (this.source.paused) {
      this.source.play();
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-pause';
    } else {
      this.source.pause();
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-play';
    };
  };

  removeHover() {
    this.hover.style.width = '0px';
  };

  returnDuration() {
    this.duration.innerHTML = _util_.handleTime(this.source.duration);
    this.updateTime();
  };

  updateTime() {
    this.duration.innerHTML = `${_util_.handleTime(this.source.currentTime)} / ${_util_.handleTime(this.source.duration)}`;

    if (this.source.currentTime === this.source.duration) {
      this.playButton.classList = '';
      this.playButton.classList = 'fa fa-play';
    };
  };
};

module.exports = Ao;
