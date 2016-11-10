// Here we just load HTTP module to create and start a simple server.
var http = require('http');


/*
    Above we start creating our server.
    The createServer function receive a callback that needs a request and reponse variables.
 */
var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>Hello World</h1>');
    response.end();
});

//server.listen function will wait some request from the browser on port 3000.
//Try: localhost:3000
server.listen(3000, fuction(){
    console.log('Server Running...');
});
