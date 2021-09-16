var http = require('http');
var fs = require('fs');


var server = http.createServer(handleRequest);

function handleRequest(res,req){
    var dataFormat = req.headers('content-type');
     var store ='';
     req.on('data', (chunk) => {
         store = store + chunk;
     });

     req.on('end', () => {
         res.write(store);
         res.end();
     })

}

server.listen(7000, () => {
    console.log('Server listening on port 7000');
})