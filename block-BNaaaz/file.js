var http = require('http');
var fs = require('fs');


var server = http.createServer(handleRequest);

function handleRequest(){
   res.setheader('Content-type', 'text/plain');

   fs.createReadStream('./readme.txt').pipe(res);  // for reading the file
}

server.listen(3000, () => {
    console.log('Server listening on port 3k');
})