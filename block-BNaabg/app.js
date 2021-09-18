var http = require('http');
var fs = require('fs');


var server = http.createServer(handleRequest);
var qs = require('querystring');


function handleRequest(req, res) {
    var store = '';
    req.on('data', (chunk) => {
        store += chunk;
     }) 

    req.on('end', () => {
       if(req.url === '/form' && req.method === 'GET'){
         res.setHeader('Content-Type', 'text/html');
         fs.createReadStream('./form.html').pipe(res);
        }
        if(req.method === 'POST' && req.url === '/form'){
            var parsedData = qs.parse(store);
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h2>${parsedData.name}</h2 /n`)
            res.write(`<h2>${parsedData.email}</h2 /n`)
            res.write(`/n <h2>${parsedData.age}</h2`)
            res.end();
        }
    })
}
server.listen(5678, () => {
    console.log('server listening on port 5678');
});