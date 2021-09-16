var { EventEmitter } = require('events');

var myEmitter = new EventEmitter();

myEmitter.on('notice', (msg) => {
    console.log('event emitted ' + msg);
})

myEmitter.emit('notice', "Hello World");

myEmitter.on('notice', () => {
    console.log('event emitted 2');
})



// var path = require('path');
// var relativepath = './server.js';

// console.log(__dirname, __filename);

// var formPath = path.join(__dirname,  'server.js');

// console.log(formPath, relativepath);


