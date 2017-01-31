'use strict';

const Ao = require(__dirname + '/lib/audio');
const n  = [...document.querySelectorAll('.mosaic-player')];

for (let i = 0, len = n.length; i < len; i++) {
  new Ao(n[i]);
};
