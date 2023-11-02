const http = require('http');
const fs = require('fs');
require('console');

const ip = '127.0.0.1'
const port = 3000

const server = http.createServer(function (_req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index2.html', (error,data)=>{
        if(error){
            res.writeHead(404)
            res.write('no encontre el index :(')
        }else{
            res.write(data)
        }
        res.end()
    })
});

server.listen(port, ip, function () {
    console.log('Servidor Inicializado');
});
