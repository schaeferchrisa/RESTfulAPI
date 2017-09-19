var express = require('express');

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
});

require('../routes')(app);

app.listen(3001);
console.log("working port 3001");
