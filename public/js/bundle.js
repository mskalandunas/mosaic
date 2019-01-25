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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);

	const tracks = __webpack_require__(3);
	const Audio = __webpack_require__(4);
	const node = document.querySelector('.mosaic-player');
	const mosaic = new Audio(node, tracks);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	const email = document.querySelector('.email');

	email.addEventListener('click', () => {
	    const select = window.getSelection();
	    let range  = document.createRange();

	    range.selectNodeContents(email);
	    select.addRange(range);
	    email.classList.add('active');
	});

	email.addEventListener('mouseout', () => {
	    if (email.className.includes('active')) {
	        email.classList.remove('active');
	    };
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	const anchor = document.querySelector('footer a.mosaic--logo');

	anchor.addEventListener('click', scrollToY, false);

	window.requestAnimFrame = (function(){
	    return window.requestAnimationFrame       ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame    ||
	        function(callback) {
	            window.setTimeout(callback, 1000 / 60);
	        };
	})();

	function scrollToY() {
	    let scrollY = window.scrollY || document.documentElement.scrollTop;
	    let scrollTargetY = 0;
	    let speed = 200;
	    let currentTime = 0;
	    let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	    function easeOutSine(pos) {
	        if ((pos /= 0.5) < 1) {
	            return 0.5 * Math.pow(pos, 5);
	        }

	        return 0.5 * (Math.pow((pos - 2), 5) + 2);
	    }

	    function tick() {
	        currentTime += 1 / 60;

	        let p = currentTime / time;
	        let t = easeOutSine(p);

	        if (p < 1) {
	            requestAnimFrame(tick);
	            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	        } else {
	            window.scrollTo(0, scrollTargetY);
	        }
	    };

	    tick();
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	const tracks = [
	    {
	        'src'         : '1',
	        'title'       : '"Through the Sunken Glades"',
	        'description' : 'Inspired by games like <em class="logo">Ori and the Blind Forest</em> and <em class="logo">Seasons After Fall</em>.  I wanted to bring to life all of the woodland creatures, plants, and little spirits, so I used exotic winds and percussion from both <a class="content--link" href="http://embertone.com/" target="_blank" title="Embertone">Embertone</a> and <a class="content--link" href="https://soundiron.com/" target="_blank" title="Soundiron">Soundiron</a> to paint the proper picture.  Strings, dulcimer, harp, and various synths/sound design as well.'
	    },
	    {
	        'src'         : '2',
	        'title'       : '"The Ruined City of Quil"',
	        'description' : 'The ruins of an ancient temple.  Endless corridors, colossal antichambers, and history long lost.  This piece accompanies <em class="logo">Son of Nor\'s</em> protagonist as they journey through the ruined temple of Taro, in the ancient city of Quil.  This was created mostly with strings from LA Scoring Strings, and live xiao.  I felt the long reverbs and lonely flute estbalished the feeling of being alone in such a long forgotten place quite perfectly.'
	    },
	    {
	        'src'         : '3',
	        'title'       : '"Mable: The Journey"',
	        'description' : 'As an exercise to learn dynamic music layering in Wwise, I created this piece to accompany gameplay in <em class="logo">Mable: The Journey by Triple Vision Games</em>.  Its upbeat and exciting style was inspired by a fusion of Madeon and Disasterpeace.  In the end, I think it does a great job of adding to the fantasy atmosphere in a fast-paced retro world.'
	    },
	    {
	        'src'         : '4',
	        'title'       : '"Breeze"',
	        'description' : 'Relaxing wind across Scottish cliffside plateaus, and the faint sound of chimes in the distance.  <em class="logo">Breeze</em> accompanies the player in their quest to herd sheep with a trusting (and unintentionally goofy) border collie in <em class="logo">Bleat!</em>.  Live guitar, <a class="content--link" href="https://soniccharge.com/synplant" target="_blank" title="Synplant">Synplant</a>, upright bass, instruments from the <a class="content--link" href="http://www.fbpsound.com/The-Toyshop-Sample-Library" target="_blank" title="Toyshop Sample Library">Toyshop Library</a>, and various synths.'
	    },
	    {
	        'src'         : '5',
	        'title'       : '"Giraffe Beats"',
	        'description' : 'Created for Nico Prinz\'s <em class="logo">Oh My Giraffe</em>, an endless runner in Africa\'s savanna.  Because of the simple and colorful art style, I decided that a very MIDI/dry sampled approached would work best for the music.  I ended up using quite a bit of African percussion, some sampled and some live, as well as a dry Pan flute for the melody.'
	    },
	    {
	        'src'         : '6',
	        'title'       : '"Winter"',
	        'description' : 'Created as a music redesign for <em class="logo">Northguard\'s</em> winter environment.  I wanted to create a sense of cold and loneliness, and I think the solemn progression along with the deep reverbs and bass does this quite well.  The flutes, especially the Irish penny-whistle, and the fluttering strings really lend themselves well to the frigid atmosphere and the search for warmth.'
	    }
	];

	module.exports = tracks;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	const _util_ = __webpack_require__(5);

	class Audio {
	    constructor(node, tracks) {
	        this.node  = node;
	        this.tracks = tracks;
	        this.current = this.node.querySelector('source');
	        this.description = this.node.querySelector('.mosaic-description');
	        this.duration = this.node.querySelector('.mosaic-time-holder');
	        this.hover = this.node.querySelector('.mosaic-seek-bar');
	        this.nextButton = this.node.querySelector('.mosaic-next');
	        this.playButton = this.node.querySelector('.mosaic-play');
	        this.playhead = this.node.querySelector('.mosaic-play-bar');
	        this.prevButton = this.node.querySelector('.mosaic-previous');
	        this.scrubber = false;
	        this.source = this.node.querySelector('audio');
	        this.sub = 'px';
	        this.timeline = this.node.querySelector('.mosaic-progress');
	        this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;
	        this.title = this.node.querySelector('.mosaic-title');

	        this.nextButton.addEventListener('click', this.next.bind(this));
	        this.playButton.addEventListener('click', this.play.bind(this));
	        this.playhead.addEventListener('mousedown', this.mouseDown.bind(this));
	        this.prevButton.addEventListener('click', this.previous.bind(this));
	        this.source.addEventListener('durationchange', this.returnDuration.bind(this));
	        this.source.addEventListener('timeupdate', this.updateTime.bind(this));
	        this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this));
	        this.timeline.addEventListener('mousedown', this.mouseDown.bind(this));
	        this.timeline.addEventListener('mouseover', this.handleHover.bind(this));

	        window.addEventListener('mouseup', this.mouseUp.bind(this));
	        window.addEventListener('resize', this.handleResize.bind(this));
	    };

	    addHover(e) {
	        let positionOffset = _util_.handleOffsetParent(this.timeline);
	        let newMargLeft    = e.pageX - positionOffset;

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
	        let positionOffset = _util_.handleOffsetParent(this.timeline);

	        return (e.pageX - positionOffset) / this.timelineWidth;
	    };

	    handleHover() {
	        this.timeline.addEventListener('mousemove', this.addHover.bind(this), false);
	        this.timeline.addEventListener('mouseout', this.removeHover.bind(this), false);
	    };

	    handlePlayhead() {
	        let playPercent = this.timelineWidth * (this.source.currentTime / this.source.duration);
	        this.playhead.style.paddingLeft = `${playPercent}px`;
	    };

	    handleResize() {
	        let padding = this.playhead.style.paddingLeft;
	        let p;

	        !padding ? p = 0 : p = parseInt(padding.substring(0, padding.length - 2));
	        this.timelineWidth = (this.timeline.offsetWidth - this.playhead.offsetWidth) + p;
	        this.handlePlayhead();
	    };

	    mouseDown() {
	        this.scrubber = true;
	        this.source.removeEventListener('timeupdate', this.handlePlayhead.bind(this), false);
	    };

	    mouseUp(e) {
	        if (!this.scrubber) {
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

	    next() {
	        let count     = this.current.getAttribute('src')[6];
	        let wasPaused = false;

	        if (count == this.tracks.length) {
	            this.current.setAttribute('src', `audio/${this.tracks[0].src}.mp3`);
	            this.title.innerHTML = this.tracks[0].title;
	            this.description.innerHTML = this.tracks[0].description;
	        } else {
	            this.current.setAttribute('src', `audio/${this.tracks[count].src}.mp3`);
	            this.title.innerHTML = this.tracks[count].title;
	            this.description.innerHTML = this.tracks[count].description;
	        };

	        if (this.source.paused) {
	            wasPaused = true;
	        };

	        this.source.load();

	        if (!wasPaused) {
	            this.source.play();
	        };

	        this.playhead.style.paddingLeft = '0px';
	    };

	    play() {
	        if (this.source.paused) {
	            this.source.play();
	            this.timeline.classList.toggle('active');
	            this.nextButton.classList.toggle('active');
	            this.prevButton.classList.toggle('active');
	            this.playButton.classList.toggle('active');
	            this.playButton.children[0].classList = '';
	            this.playButton.children[0].classList = 'fa fa-pause';
	        } else {
	            this.source.pause();
	            this.timeline.classList.toggle('active');
	            this.nextButton.classList.toggle('active');
	            this.prevButton.classList.toggle('active');
	            this.playButton.classList.toggle('active');
	            this.playButton.children[0].classList = '';
	            this.playButton.children[0].classList = 'fa fa-play';
	        };
	    };

	    previous() {
	        let count     = this.current.getAttribute('src')[6];
	        let wasPaused = false;

	        if (count == 1) {
	            this.current.setAttribute('src', `audio/${this.tracks[this.tracks.length - 1].src}.mp3`);
	            this.title.innerHTML = this.tracks[this.tracks.length - 1].title;
	            this.description.innerHTML = this.tracks[this.tracks.length - 1].description;
	        } else {
	            this.current.setAttribute('src', `audio/${this.tracks[count - 2].src}.mp3`);
	            this.title.innerHTML = this.tracks[count - 2].title;
	            this.description.innerHTML = this.tracks[count - 2].description;
	        };

	        if (this.source.paused) {
	            wasPaused = true;
	        };

	        this.source.load();

	        if (!wasPaused) {
	            this.source.play();
	        };

	        this.playhead.style.paddingLeft = '0px';
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

	        if (this.source.currentTime === this.source.duration) {;
	            this.next();
	            this.play();
	            this.timeline.classList.toggle('active');
	            this.nextButton.classList.toggle('active');
	            this.prevButton.classList.toggle('active');
	            this.playButton.classList.toggle('active');
	        };
	    };
	}

	module.exports = Audio;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	const _util_ = {
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

	module.exports = _util_;


/***/ })
/******/ ]);