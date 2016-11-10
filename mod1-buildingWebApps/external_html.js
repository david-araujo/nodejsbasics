var http = require('http');

// FS (File System) module allows to manipulate files from the OS.
var fs   = require('fs');

var server = http.createServer(function(request, response){

    var dest = request.url;

    console.log(dest);

    switch (dest) {
        case '/':
            dest = 'index.html';
        break;

        case '/articles':
            dest = 'articles.html';
        break;

        case '/contact':
            dest = 'contact.html';
        break;

        default:
            dest = '404.html';
    }

    // The .readFile function will read the file requested in the dest variable and will load the content according it.
    fs.readFile(__dirname + '/' + dest, function(err, html){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
});

server.listen(3000, function(){
    console.log('Server running... Geting an external html file \\o/');
});
