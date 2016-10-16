'use strict';

const Ao = require(__dirname + '/lib/audio');
const nodes = document.getElementsByClassName('player-container');

for (let i = 0; i < nodes.length; i++) {
  new Ao(nodes[i]);
};
