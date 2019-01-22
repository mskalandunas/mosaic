'use strict';

import tracks from './lib/tracks';
import Audio from './lib/audio';

const node = document.querySelector('.mosaic-player');
const mosaic = new Audio(node, tracks); // eslint-disable-line no-unused-vars
