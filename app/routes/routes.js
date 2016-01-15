var api = require('../controller/api.js');
var latest = require('../controller/latest.js');

module.exports = function(app) {
    
    app.get('/api/imagesearch/*', function(req, res) {
        api(req, res);
    });
    
    app.get('/latest/imagesearch/', function(req, res) {
        latest(req, res);
    });
};