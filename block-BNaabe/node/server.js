// var path = require('path');

// // absolute path of the current file in which we are working

// console.log(__filename);

// console.log(__dirname + '/app.js');
// // Relative path 
// var relativePath = './index.html';

// console.log(relativePath);


// var formPath = path.join(__dirname, 'index.html');
// console.log(formPath);

// Second Question

// var http = require('http');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res){
//    if(req.method === 'POST' && req.url === '/'){
//        var store ='';
//        req.on('data', (chunk) => {
//            store += chunk;
//        }).on('end', () => {
//            res.statusCode = 201;
//            res.end(store);
//        })
//    }
// }

// server.listen(7000, () => {
//     console.log('server listening on port 7000');
// })


// Third Question

var http = require('http');
var qs = require('querystring');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
   if(req.method === 'POST' && req.url === '/'){
       var store ='';
       req.on('data', (chunk) => {
           store += chunk;
       }).on('end', () => {
           res.statusCode = 201;
           var parseData = qs.parse(store);
           res.end(JSON.stringify(parseData));
       })
   }
}

server.listen(7000, () => {
    console.log('server listening on port 7000');
})


