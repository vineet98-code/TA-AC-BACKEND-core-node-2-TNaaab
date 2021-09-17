var http = require('http');

var server = http.createServer('handleRequest');

function handleRequest(req, res){
    
}

server.listen(5000, () => {
    console.log('server listening on port 5000');
});