'use strict';

require(__dirname + '/lib/ux');

const tracks = require(__dirname + '/lib/tracks');
const Audio  = require(__dirname + '/lib/audio');
const node   = document.querySelector('.mosaic-player');
const mosaic = new Audio(node, tracks);
