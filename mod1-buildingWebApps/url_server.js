var http = require('http');

// URL module add fuctions that you can manipulate url easily.
var url  = require('url');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>Geting data from URL (Query Strings)');

    // .parse will bring a JSON object with adtional information about url requested.
    var result = url.parse(request.url, true);

    console.log(result);
    // The log bellow will be showed on Terminal...
    /*
        Url {
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '?greeting=Hello',
            query: { greeting: 'Hello' },
            pathname: '/',
            path: '/?greeting=Hello',
            href: '/?greeting=Hello'
        }
        Url {
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '',
            query: {},
            pathname: '/favicon.ico',
            path: '/favicon.ico',
            href: '/favicon.ico'
        }
     */

    for(var key in result.query){
        response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
    }

    response.end();
});

server.listen(3000, function(){
  console.log('Server running...');
});

// TRY: localhost/3000/?greeting=Hello
