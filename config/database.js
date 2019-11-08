var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blockchain-example');

mongoose.connection.on('connected', function(){
    console.log('Database connected');
});

mongoose.connection.on('error', function(error){
    console.log('Database error: '+ error);
});

mongoose.connection.on('disconnect', function(){
    console.log('Houve queda de comunicação com o banco de dados.');
});

mongoose.connection.on('disconnected', function(){
    console.log('Houve queda de comunicação com o banco de dados.');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Conexão fechada pelo término da aplicação.');
        process.exit(0);
    });
});