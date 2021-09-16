var path = require('path');

var relativepath = './server.js';


console.log(__dirname, __filename);

var formPath = path.join(__dirname,  'server.js');


console.log(formPath, relativepath);