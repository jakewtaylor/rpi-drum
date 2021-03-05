const MPR121 = require('adafruit-mpr121');

const sounds = require('./sounds');

const mpr121 = new MPR121(0x5A, 1);

// listen for touch events
mpr121.on('touch', (pin) => {
    const { name, sound } = sounds[pin] || {};

    if (name && sound) {
        console.log(`${name}!`);
        sound.play();
    }
});

// // listen for release events
// mpr121.on('release', (pin) => console.log(`pin ${pin} released`));

// // listen for changes to the state of a specific pin
// mpr121.on(3, (state) => console.log(`pin 3 is ${state ? 'touched' : 'released'}`));

// // check the current state of a specific pin synchronously
// const state = mpr121.isTouched(2);
// console.log(`pin 2 is ${state ? 'touched' : 'released'}`);
