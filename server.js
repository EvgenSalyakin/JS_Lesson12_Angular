var express = require('express');
var Mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();
var api_key = 'key-23398d94ac306445186eb7bd6b2f8427';
var domain = 'sandboxa16a325466ac4459aae8c5fd57f83294.mailgun.org';
var from_who = 'Mailgun Sandbox <postmaster@sandboxa16a325466ac4459aae8c5fd57f83294.mailgun.org>';

var port = (process.env.PORT || '3000');
app.set('port', port);


app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.render('/index.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/submit/:mail', function(req,res) {

    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
        from: from_who,
        to: 'Evgen <e.salyakin@gmail.com>',
        subject: 'Letter from server.',
        text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function (err, body) {
        console.log(body);
        if (err) console.log("Error: ", err);
        else console.log(req);
    });
});

app.listen(port, function(){
    console.log('listening on *:',port);
});