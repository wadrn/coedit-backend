var DocController = require('./controllers/doc-controller');
var ProController = require('./controllers/pro-controller');

module.exports = function(app){
    app.get('/api/getAllDocName',DocController.getAllDocName);
}