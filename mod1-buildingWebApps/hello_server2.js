var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    /*
        We can create some ROUTES that will load different pages or content for it.
        TRY: localhost:3000, localhost:3000/welcome and localhost:3000/whatever.
     */
    switch (request.url) {
        case '/':
            response.write('<h1>Our Principal page.</h1>');
        break;
        case '/welcome':
            response.write('<h1>Welcome to our page.</h1>');
        break;
        default:
            response.write('<h1>Page not Found 404... \\o/</h1>');
    }
});

server.listen(3000, function(){
    console.log('Server running...');
});
