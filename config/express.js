const { TransactionProcessor } = require('sawtooth-sdk/processor');
var express = require('express');
var consign = require('consign');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;