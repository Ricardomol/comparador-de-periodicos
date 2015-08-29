var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {

  var elpais_url = 'http://ep00.epimg.net/rss/elpais/portada.xml';
  var elmundo_url = 'http://estaticos.elmundo.es/elmundo/rss/portada.xml';
  var abc_url = 'http://www.abc.es/rss/feeds/abcPortada.xml';
  var larazon_url = 'http://www.larazon.es/rss/portada.xml';
  var lavanguardia_url = 'http://feeds.feedburner.com/lavanguardia/home';

  request(elpais_url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      console.log("Todo ok");
      res.send(body);
    } else {
      console.log("No todo ok");
      response.send('Error!');
    }
  });
  
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});

