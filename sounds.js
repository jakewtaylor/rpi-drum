const Sound = require('node-aplay');

const kick = new Sound('./samples/kick.wav');

kick.play();