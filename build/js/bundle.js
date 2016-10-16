/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Ao = __webpack_require__(1);
	const nodes = document.getElementsByClassName('player-container');

	for (let i = 0; i < nodes.length; i++) {
	  new Ao(nodes[i]);
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const _util_ = __webpack_require__(2);

	function Ao(node) {
	  this.node = node;
	  this.duration = node.children[1].children[2].children[0];
	  this.hover = node.children[1].children[1].children[1];
	  this.playButton = node.children[1].children[0];
	  this.playhead = node.children[1].children[1].children[0];
	  this.scrubber = false;
	  this.source = node.children[0];
	  this.timeline = node.children[1].children[1];
	  this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;

	  this.addHover = (e) => {
	    let positionOffset = _util_.handleOffsetParent(this.timeline);
	    let newMargLeft = e.pageX - positionOffset;

	    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
	      this.hover.style.width = newMargLeft + 'px';
	    };

	    if (newMargLeft < 0) {
	      this.hover.style.width = '0px';
	    };

	    if (newMargLeft > this.timelineWidth) {
	      this.hover.style.width = this.timelineWidth + 'px';
	    };
	  };

	  this.handleClick = (e) => {
	    let positionOffset = _util_.handleOffsetParent(this.timeline);
	    return (e.pageX - positionOffset) / this.timelineWidth;
	  };

	  this.handleHover = () => {
	    this.timeline.addEventListener('mousemove', this.addHover, false);
	    this.timeline.addEventListener('mouseout', this.removeHover, false);
	  };

	  this.handlePlayhead = () => {
	    let playPercent = this.timelineWidth * (this.source.currentTime / this.source.duration);
	    this.playhead.style.paddingLeft = playPercent + 'px';
	  };

	  this.mouseDown = () => {
	    this.scrubber = true;
	    window.addEventListener('mousemove', this.movePlayhead, true);
	    this.source.removeEventListener('timeupdate', this.handlePlayhead, false);
	  };

	  this.mouseUp = (e) => {
	    if (this.scrubber === false) {
	      return;
	    };

	    this.movePlayhead(e);
	    window.removeEventListener('mousemove', this.movePlayhead, true);
	    this.source.currentTime = this.source.duration * this.handleClick(e);
	    this.source.addEventListener('timeupdate', this.handlePlayhead, false);
	    this.scrubber = false;
	  };

	  this.movePlayhead = (e) => {
	    let positionOffset = _util_.handleOffsetParent(this.timeline);
	    let newMargLeft = e.pageX - positionOffset;

	    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
	      this.playhead.style.paddingLeft = newMargLeft + 'px';
	    };

	    if (newMargLeft < 0) {
	      this.playhead.style.paddingLeft = '0px';
	    };

	    if (newMargLeft > this.timelineWidth) {
	      this.playhead.style.paddingLeft = this.timelineWidth + 'px';
	    };
	  };

	  this.play = () => {
	    if (this.source.paused) {
	      this.source.play();
	      this.playButton.classList = '';
	      this.playButton.classList = 'fa fa-pause';
	    } else {
	      this.source.pause();
	      this.playButton.classList = '';
	      this.playButton.classList = 'fa fa-play';
	    };
	  };

	  this.removeHover = () => {
	    this.hover.style.width = '0px';
	  };

	  this.returnDuration = () => {
	    this.duration.innerHTML = _util_.handleTime(this.source.duration);
	    this.updateTime();
	  };

	  this.updateTime = () => {
	    this.duration.innerHTML = _util_.handleTime(this.source.currentTime) + ' / ' + _util_.handleTime(this.source.duration);

	    if (this.source.currentTime === this.source.duration) {
	      this.playButton.classList = '';
	      this.playButton.classList = 'fa fa-play';
	    };
	  };

	  this.playButton.addEventListener('click', this.play, false);
	  this.playhead.addEventListener('mousedown', this.mouseDown, false);
	  this.source.addEventListener('durationchange', this.returnDuration);
	  this.source.addEventListener('timeupdate', this.updateTime);
	  this.source.addEventListener('timeupdate', this.handlePlayhead);
	  this.timeline.addEventListener('mousedown', this.mouseDown, false);
	  this.timeline.addEventListener('mouseover', this.handleHover, false);
	  window.addEventListener('mouseup', this.mouseUp, false);
	};

	module.exports = Ao;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	const util = {
	  handleTime:(duration) => {
	    let sec_num = parseInt(duration, 10);
	    let hours   = Math.floor(sec_num / 3600);
	    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    let seconds = sec_num - (hours * 3600) - (minutes * 60);

	    if (hours < 10 && hours > 0) {
	      hours = '0' + hours + ':';
	    } else {
	      hours = '';
	    };

	    if (minutes < 10) {
	      minutes = '0' + minutes;
	    };

	    if (seconds < 10) {
	      seconds = '0' + seconds;
	    };

	    return hours + minutes + ':' + seconds;
	  },

	  handleOffsetParent:(node) => {
	    let n = node;
	    let o = 0;

	    while (n.offsetParent !== null) {
	      o = o + n.offsetLeft;
	      n = n.offsetParent;
	    };

	    return o;
	  }
	};

	module.exports = util;


/***/ }
/******/ ]);