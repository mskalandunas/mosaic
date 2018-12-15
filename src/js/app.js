'use strict';

require(__dirname + '/lib/email');
require(__dirname + '/lib/scroll');

const tracks = require(__dirname + '/lib/tracks');
const Audio = require(__dirname + '/lib/audio');
const node = document.querySelector('.mosaic-player');
const mosaic = new Audio(node, tracks);
