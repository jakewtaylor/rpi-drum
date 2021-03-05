const Sound = require('node-aplay');

const soundNames = ['kick', 'snare', 'closed', 'open', 'cymbal', 'clap'];

module.exports = soundNames.map(name => ({ 
    name,
    sound: new Sound(`./samples/${name}.wav`),
}));

// module.exports = soundNames.reduce((acc, name) => ({
//     ...acc,
//     [name]: new Sound(`./samples/${name}.wav`),
// }), {});
