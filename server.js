
//Set requirments
var express = require('express'),            //express framework
api = require('./api');                      //api functions file

var bodyParser = require("body-parser");    //body-parser to parse json post


var server=express();   //set server var

server.use(express.static(__dirname+'/public')); //public contains an index file for homepage
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


//Set port and set server to listen
var port= 8080;
server.listen(port,function(){
	console.log('server listening on port ' + port);
});


server.get('/', function(req, res, next) {
  // Handle the get for this route
});

server.post('/', function(req, res, next) {
 // Handle the post for this route
});


//Set endpoints
server.get('/api/contacts', api.contactsGet);
server.get('/api/contacts/:id', api.contactGetById);
server.post('/api/contacts', api.contactPost);
server.post('/api/contacts/:id', api.contactUpdate);
server.delete('/api/contacts/:id', api.contactDelete);







