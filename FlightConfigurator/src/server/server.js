// set variables for environment
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var pdf = require('express-pdf');

var projectDir = __dirname+'/../..';

app.use(express.static(projectDir+'/public'));
app.use(bodyParser.json());
app.use(pdf)
app.use('/pdf', express.static(projectDir + '/data/json/output.pdf'));
app.use('/json', express.static(projectDir+'/data/json'));
require('./saveLastConf')(app, projectDir+'/data/json')
// Set server port
app.listen(8080, function() {
    console.log('server listening on port 8080');
});
console.log('server is running');
