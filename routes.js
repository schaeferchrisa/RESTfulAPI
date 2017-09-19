module.exports = function(app){
    var user = require('./controllers/user');
    app.get('/user/:id', user.findById);
}
