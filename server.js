var http = require('http');
var app = require('./config/express');
require('./config/database');

http.createServer(app).listen(3001, function(){
    console.log('Servidor iniciado');
});