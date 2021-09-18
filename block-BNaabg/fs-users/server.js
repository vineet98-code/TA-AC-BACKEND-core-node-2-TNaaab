var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(handleRequest);

var userPath = __dirname + '/users/'

function handleRequest(req, res){
    
    var parsedUrl = url.parse(req.url, true);

    var store ='';
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        // handle all route
        if(req.url === '/users' && req.method === 'POST'){
            var username  =  JSON.parse(store).username;
            fs.open(userPath + username + '.json', 'wx', (err, fd) => { // creating the file inside the user directory
                if(err) return console.log(err);
                fs.writeFile(fd, store, (err) =>{
                    if(err) return console.log(err);
                    fs.close(fd, () => {
                    return   res.end(`${username} created successfully`);
                    }) // fd is pointing to the same file hich have been returned to us by fs.open
                });
            })
            
        }
        if(parsedUrl.pathname === '/users' && req.method === 'GET'){
            
            var username = parsedUrl.query.username;
            fs.readFile(userPath + username + '.json', (err, content) =>{
                if(err) return console.log(err);
                res.setHeader('Content-Type', 'application/json');
            return    res.end(content);
            });
        }// update infomation
        if(parsedUrl.pathname === '/users' && req.method === 'PUT'){
            var username = parsedUrl.query.username; // extracting the username
            
            fs.open(userPath + username + '.json', 'r+', (err, fd) => {
                if(err) return console.log(err);
                fs.ftruncate(fd, (err) => {
                    if(err) return console.log(err);

                    fs.writeFile(fd, store, (err) =>{
                        if(err) return console.log(err);
                        fs.close(fd, () => {
                        return    res.end(`${username} updated successfully`);
                        }) // fd is pointing to the same file hich have been returned to us by fs.open
                    });
                }) 
            })         
        }
        if(parsedUrl.pathname === '/users' && req.method === 'DELETE'){
            var username = parsedUrl.query.username; // extracting the username
            fs.unlink(userPath + username + '.json', (err) => {
                if(err) return console.log(err);
            return    res.end(`${username} deleted successfully`);
                
            })
        }
        res.statusCode = 404;
        res.end('Page not found');

    })

}

server.listen(9000, () => {
    console.log('server is istening on port 9k');
})