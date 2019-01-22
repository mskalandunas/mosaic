// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function(modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
                if (!jumped && currentRequire) {
                    return currentRequire(name, true);
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true);
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === 'string') {
                    return nodeRequire(name);
                }

                var err = new Error('Cannot find module \'' + name + '\'');
                err.code = 'MODULE_NOT_FOUND';
                throw err;
            }

            localRequire.resolve = resolve;
            localRequire.cache = {};

            var module = cache[name] = new newRequire.Module(name);

            modules[name][0].call(module.exports, localRequire, module, module.exports, this);
        }

        return cache[name].exports;

        function localRequire(x){
            return newRequire(localRequire.resolve(x));
        }

        function resolve(x){
            return modules[name][1][x] || x;
        }
    }

    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports) {
        modules[id] = [function(require, module) {
            module.exports = exports;
        }, {}];
    };

    for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i]);
    }

    if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(entry[entry.length - 1]);

        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") {
            module.exports = mainExports;

            // RequireJS
        } else if (typeof define === "function" && define.amd) {
            define(function() {
                return mainExports;
            });

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports;
        }
    }

    // Override the current require with this new one
    return newRequire;
})({"js/lib/tracks.js":[function(require, module, exports) {
    'use strict';

    var tracks = [{
        'src': '1',
        'title': '"Through the Sunken Glades"',
        'description': 'Inspired by games like <em class="logo">Ori and the Blind Forest</em> and <em class="logo">Seasons After Fall</em>.  I wanted to bring to life all of the woodland creatures, plants, and little spirits, so I used exotic winds and percussion from both <a class="content--link" href="http://embertone.com/" target="_blank" title="Embertone">Embertone</a> and <a class="content--link" href="https://soundiron.com/" target="_blank" title="Soundiron">Soundiron</a> to paint the proper picture.  Strings, dulcimer, harp, and various synths/sound design as well.'
    }, {
        'src': '2',
        'title': '"The Ruined City of Quil"',
        'description': 'The ruins of an ancient temple.  Endless corridors, colossal antichambers, and history long lost.  This piece accompanies <em class="logo">Son of Nor\'s</em> protagonist as they journey through the ruined temple of Taro, in the ancient city of Quil.  This was created mostly with strings from LA Scoring Strings, and live xiao.  I felt the long reverbs and lonely flute estbalished the feeling of being alone in such a long forgotten place quite perfectly.'
    }, {
        'src': '3',
        'title': '"Mable: The Journey"',
        'description': 'As an exercise to learn dynamic music layering in Wwise, I created this piece to accompany gameplay in <em class="logo">Mable: The Journey by Triple Vision Games</em>.  Its upbeat and exciting style was inspired by a fusion of Madeon and Disasterpeace.  In the end, I think it does a great job of adding to the fantasy atmosphere in a fast-paced retro world.'
    }, {
        'src': '4',
        'title': '"Breeze"',
        'description': 'Relaxing wind across Scottish cliffside plateaus, and the faint sound of chimes in the distance.  <em class="logo">Breeze</em> accompanies the player in their quest to herd sheep with a trusting (and unintentionally goofy) border collie in <em class="logo">Bleat!</em>.  Live guitar, <a class="content--link" href="https://soniccharge.com/synplant" target="_blank" title="Synplant">Synplant</a>, upright bass, instruments from the <a class="content--link" href="http://www.fbpsound.com/The-Toyshop-Sample-Library" target="_blank" title="Toyshop Sample Library">Toyshop Library</a>, and various synths.'
    }, {
        'src': '5',
        'title': '"Giraffe Beats"',
        'description': 'Created for Nico Prinz\'s <em class="logo">Oh My Giraffe</em>, an endless runner in Africa\'s savanna.  Because of the simple and colorful art style, I decided that a very MIDI/dry sampled approached would work best for the music.  I ended up using quite a bit of African percussion, some sampled and some live, as well as a dry Pan flute for the melody.'
    }, {
        'src': '6',
        'title': '"Winter"',
        'description': 'Created as a music redesign for <em class="logo">Northguard\'s</em> winter environment.  I wanted to create a sense of cold and loneliness, and I think the solemn progression along with the deep reverbs and bass does this quite well.  The flutes, especially the Irish penny-whistle, and the fluttering strings really lend themselves well to the frigid atmosphere and the search for warmth.'
    }];
    module.exports = tracks;
}, {}], "js/lib/utilities.js":[function(require, module, exports) {
    'use strict';

    var _util_ = {
        handleTime: function handleTime(duration) {
            var sec_num = parseInt(duration, 10);
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - hours * 3600) / 60);
            var seconds = sec_num - hours * 3600 - minutes * 60;

            if (hours < 10 && hours > 0) {
                hours = '0' + hours + ':';
            } else {
                hours = '';
            }



            if (minutes < 10) {
                minutes = '0' + minutes;
            }



            if (seconds < 10) {
                seconds = '0' + seconds;
            }


            return hours + minutes + ':' + seconds;
        },
        handleOffsetParent: function handleOffsetParent(node) {
            var n = node;
            var o = 0;

            while (n.offsetParent !== null) {
                o = o + n.offsetLeft;
                n = n.offsetParent;
            }


            return o;
        }
    };
    module.exports = _util_;
}, {}], "js/lib/audio.js":[function(require, module, exports) {
    'use strict';

    var _utilities = _interopRequireDefault(require("./utilities"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) {descriptor.writable = true;} Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) {_defineProperties(Constructor.prototype, protoProps);} if (staticProps) {_defineProperties(Constructor, staticProps);} return Constructor; }

    var Audio =
/*#__PURE__*/
function() {
    function Audio(node, tracks) {
        _classCallCheck(this, Audio);

        this.node = node;
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
    }

    _createClass(Audio, [{
        key: "addHover",
        value: function addHover(e) {
            var positionOffset = _utilities.default.handleOffsetParent(this.timeline);

            var newMargLeft = e.pageX - positionOffset;

            if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
                this.hover.style.width = "".concat(newMargLeft, "px");
            }



            if (newMargLeft < 0) {
                this.hover.style.width = '0px';
            }



            if (newMargLeft > this.timelineWidth) {
                this.hover.style.width = "".concat(this.timelineWidth, "px");
            }


        }
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            var positionOffset = _utilities.default.handleOffsetParent(this.timeline);

            return (e.pageX - positionOffset) / this.timelineWidth;
        }
    }, {
        key: "handleHover",
        value: function handleHover() {
            this.timeline.addEventListener('mousemove', this.addHover.bind(this), false);
            this.timeline.addEventListener('mouseout', this.removeHover.bind(this), false);
        }
    }, {
        key: "handlePlayhead",
        value: function handlePlayhead() {
            var playPercent = this.timelineWidth * (this.source.currentTime / this.source.duration);
            this.playhead.style.paddingLeft = "".concat(playPercent, "px");
        }
    }, {
        key: "handleResize",
        value: function handleResize() {
            var padding = this.playhead.style.paddingLeft;
            var p;
            !padding ? p = 0 : p = parseInt(padding.substring(0, padding.length - 2));
            this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth + p;
            this.handlePlayhead();
        }
    }, {
        key: "mouseDown",
        value: function mouseDown() {
            this.scrubber = true;
            this.source.removeEventListener('timeupdate', this.handlePlayhead.bind(this), false);
        }
    }, {
        key: "mouseUp",
        value: function mouseUp(e) {
            if (!this.scrubber) {
                return;
            }


            this.movePlayhead(e);
            window.removeEventListener('mousemove', this.movePlayhead.bind(this), true);
            this.source.currentTime = this.source.duration * this.handleClick(e);
            this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this), false);
            this.scrubber = false;
        }
    }, {
        key: "movePlayhead",
        value: function movePlayhead(e) {
            var positionOffset = _utilities.default.handleOffsetParent(this.timeline);

            var newMargLeft = e.pageX - positionOffset;

            if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
                this.playhead.style.paddingLeft = "".concat(newMargLeft, "px");
            }



            if (newMargLeft < 0) {
                this.playhead.style.paddingLeft = '0px';
            }



            if (newMargLeft > this.timelineWidth) {
                this.playhead.style.paddingLeft = "".concat(this.timelineWidth, "px");
            }


        }
    }, {
        key: "next",
        value: function next() {
            var count = this.current.getAttribute('src')[6];
            var wasPaused = false;

            if (count == this.tracks.length) {
                this.current.setAttribute('src', "audio/".concat(this.tracks[0].src, ".mp3"));
                this.title.innerHTML = this.tracks[0].title;
                this.description.innerHTML = this.tracks[0].description;
            } else {
                this.current.setAttribute('src', "audio/".concat(this.tracks[count].src, ".mp3"));
                this.title.innerHTML = this.tracks[count].title;
                this.description.innerHTML = this.tracks[count].description;
            }



            if (this.source.paused) {
                wasPaused = true;
            }


            this.source.load();

            if (!wasPaused) {
                this.source.play();
            }


            this.playhead.style.paddingLeft = '0px';
        }
    }, {
        key: "play",
        value: function play() {
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
            }


        }
    }, {
        key: "previous",
        value: function previous() {
            var count = this.current.getAttribute('src')[6];
            var wasPaused = false;

            if (count == 1) {
                this.current.setAttribute('src', "audio/".concat(this.tracks[this.tracks.length - 1].src, ".mp3"));
                this.title.innerHTML = this.tracks[this.tracks.length - 1].title;
                this.description.innerHTML = this.tracks[this.tracks.length - 1].description;
            } else {
                this.current.setAttribute('src', "audio/".concat(this.tracks[count - 2].src, ".mp3"));
                this.title.innerHTML = this.tracks[count - 2].title;
                this.description.innerHTML = this.tracks[count - 2].description;
            }



            if (this.source.paused) {
                wasPaused = true;
            }


            this.source.load();

            if (!wasPaused) {
                this.source.play();
            }


            this.playhead.style.paddingLeft = '0px';
        }
    }, {
        key: "removeHover",
        value: function removeHover() {
            this.hover.style.width = '0px';
        }
    }, {
        key: "returnDuration",
        value: function returnDuration() {
            this.duration.innerHTML = _utilities.default.handleTime(this.source.duration);
            this.updateTime();
        }
    }, {
        key: "updateTime",
        value: function updateTime() {
            this.duration.innerHTML = "".concat(_utilities.default.handleTime(this.source.currentTime), " / ").concat(_utilities.default.handleTime(this.source.duration));

            if (this.source.currentTime === this.source.duration) {

                this.next();
                this.play();
                this.timeline.classList.toggle('active');
                this.nextButton.classList.toggle('active');
                this.prevButton.classList.toggle('active');
                this.playButton.classList.toggle('active');
            }


        }
    }]);

    return Audio;
}();

    module.exports = Audio;
}, {"./utilities":"js/lib/utilities.js"}], "js/app.js":[function(require, module, exports) {
    'use strict';

    var _tracks = _interopRequireDefault(require("./lib/tracks"));

    var _audio = _interopRequireDefault(require("./lib/audio"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var node = document.querySelector('.mosaic-player');
    var mosaic = new _audio.default(node, _tracks.default);
}, {"./lib/tracks":"js/lib/tracks.js", "./lib/audio":"js/lib/audio.js"}], "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
        OldModule.call(this, moduleName);
        this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function(fn) {
                this._acceptCallbacks.push(fn || function() {});
            },
            dispose: function(fn) {
                this._disposeCallbacks.push(fn);
            }
        };
        module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
        var hostname = "" || location.hostname;
        var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
        var ws = new WebSocket(protocol + '://' + hostname + ':' + "62620" + '/');

        ws.onmessage = function(event) {
            var data = JSON.parse(event.data);

            if (data.type === 'update') {
                console.clear();
                data.assets.forEach(function(asset) {
                    hmrApply(global.parcelRequire, asset);
                });
                data.assets.forEach(function(asset) {
                    if (!asset.isNew) {
                        hmrAccept(global.parcelRequire, asset.id);
                    }
                });
            }

            if (data.type === 'reload') {
                ws.close();

                ws.onclose = function() {
                    location.reload();
                };
            }

            if (data.type === 'error-resolved') {
                console.log('[parcel] ✨ Error resolved');
                removeErrorOverlay();
            }

            if (data.type === 'error') {
                console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                removeErrorOverlay();
                var overlay = createErrorOverlay(data);
                document.body.appendChild(overlay);
            }
        };
    }

    function removeErrorOverlay() {
        var overlay = document.getElementById(OVERLAY_ID);

        if (overlay) {
            overlay.remove();
        }
    }

    function createErrorOverlay(data) {
        var overlay = document.createElement('div');
        overlay.id = OVERLAY_ID; // html encode message and stack trace

        var message = document.createElement('div');
        var stackTrace = document.createElement('pre');
        message.innerText = data.error.message;
        stackTrace.innerText = data.error.stack;
        overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
        return overlay;
    }

    function getParents(bundle, id) {
        var modules = bundle.modules;

        if (!modules) {
            return [];
        }

        var parents = [];
        var k, d, dep;

        for (k in modules) {
            for (d in modules[k][1]) {
                dep = modules[k][1][d];

                if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                    parents.push(k);
                }
            }
        }

        if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
        }

        return parents;
    }

    function hmrApply(bundle, asset) {
        var modules = bundle.modules;

        if (!modules) {
            return;
        }

        if (modules[asset.id] || !bundle.parent) {
            var fn = new Function('require', 'module', 'exports', asset.generated.js);
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
        } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
        }
    }

    function hmrAccept(bundle, id) {
        var modules = bundle.modules;

        if (!modules) {
            return;
        }

        if (!modules[id] && bundle.parent) {
            return hmrAccept(bundle.parent, id);
        }

        var cached = bundle.cache[id];
        bundle.hotData = {};

        if (cached) {
            cached.hot.data = bundle.hotData;
        }

        if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function(cb) {
                cb(bundle.hotData);
            });
        }

        delete bundle.cache[id];
        bundle(id);
        cached = bundle.cache[id];

        if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function(cb) {
                cb();
            });

            return true;
        }

        return getParents(global.parcelRequire, id).some(function(id) {
            return hmrAccept(global.parcelRequire, id);
        });
    }
}, {}]}, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "js/app.js"], null);
//# sourceMappingURL=/app.c3f9f951.map