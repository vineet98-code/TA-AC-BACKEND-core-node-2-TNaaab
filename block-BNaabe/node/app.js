// Fourth Question
//  Create server which can handle both json/form data without specifying which format of data is being received.

// var http = require('http');
// var qs = require('querystring');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res){
   
//        var store ='';

//        console.log(req.headers['Content-Type']);

//        req.on('data', (chunk) => {
//            store += chunk;
//        })

//        req.on('end', () => {
//            if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
//                var formData = qs.parse(store);
//                res.end(JSON.stringify(formData));
//             }
//            if(req.headers['content-type'] === 'application/json'){
//                res.end(store);
//             }
//        })
   
// }

// server.listen(4000, () => {
//     console.log('server listening on port 4000');
// })


// Fifth Question
// create server, send json data in request from postman, parse in on the server and send html response with entire parsed data information.


// var http = require('http');
// var qs = require('querystring');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res){
   
//        var store ='';

//        console.log(req.headers['Content-Type']);

//        req.on('data', (chunk) => {
//            store += chunk;
//        })

//        req.on('end', () => {
//            if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
//                var formData = qs.parse(store);
//                res.end(JSON.stringify(formData));
//             }
//            if(req.headers['content-type'] === 'application/json'){
//                var jsonData = JSON.parse(store);
//                res.setHeader('Content-Type', 'text/html');

//                res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`);
//             }
//        })
   
// }
// server.listen(2000, () => {
//     console.log('server listening on port 2000');
// })

// sixth Question 
//  Follow above question with form data containing fields i.e name and email. 
// Parse form-data using `querystring` module
// respond with HTML page containing only email from data in H2 tag.

var http = require('http');
var qs = require('querystring');

var server = http.createServer(handleRequest);


function handleRequest(req, res){
   
       var store ='';

       console.log(req.headers['Content-Type']);

       req.on('data', (chunk) => {
           store += chunk;
       })

       req.on('end', () => {
           if(req.headers['Content-type'] === 'application/x-www-form-urlencoded'){
               var formData = qs.parse(store);
               res.setHeader('Content-Type', 'text/html');
               res.end(`<h2>${formData.name}</h2><p>${formData.email}</p>`);
            }

           if(req.headers['Content-type'] === 'application/json'){
               var jsonData = JSON.parse(store);
               
               res.setHeader('Content-Type', 'text/html');

               res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`);
            }
       })
   
}

server.listen(2100, () => {
    console.log('server listening on port 2100');
})