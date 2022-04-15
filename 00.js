const http = require('http');

http.createServer(function(require,response){
    response.end("<h1>Bem-vindx</h1>")
}).listen(8080);

console.log("Funfando!")