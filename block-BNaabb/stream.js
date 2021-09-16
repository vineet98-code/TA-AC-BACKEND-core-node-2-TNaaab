var http = require('http');
var fs = require('fs');


var server = http.createServer(handleRequest);

function handleRequest(res,req){
     var store ='';
     req.on('data', (chunk) => {
         store = store + chunk;
     });

     req.on('end', () => {
         console.log(store);
     })

    
    // res.setheader('Content-type', 'text/plain');
//    fs.createReadStream('./readme.txt').pipe(res);  // for reading the file
}

server.listen(3456, () => {
    console.log('Server listening on port 3456');
})