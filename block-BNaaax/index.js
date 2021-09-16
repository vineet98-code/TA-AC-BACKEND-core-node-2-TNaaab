var path = require('path');

var relativepath = './form.html';

var absolutePath = __dirname;

// console.log(\_\_dirname);
// console.log(\_\_filename);

var formPath = path.join(__dirname,  'index.js');


console.log(formPath, relativepath);