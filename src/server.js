var express = require('express');
var BodyParser = require('body-parser');
var Logger = require('logger');
var config = require("./config/env");


var app = express();
function startServer(){
    app.use(BodyParser.json());
    require('./routes')(app);
    
    app.listen(config.port,"0.0.0.0", () => {
        console.log("server running at ", config.port);
    })
}
startServer();