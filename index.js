var express = require('express');
var app = new express();
var port = 80;

app.listen(port, function(err) {
    if (typeof(err) == undefined) {
        console.log('Your application is running on : ' + port + ' port');  
    }
});

app.use(express.static("static"));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index');
})