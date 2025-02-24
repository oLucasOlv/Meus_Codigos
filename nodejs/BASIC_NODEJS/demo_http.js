var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('Hello World')
    res.end()
}).listen(1010)