var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {

  var url_data = [{
		   url: 'http://ep00.epimg.net/rss/elpais/portada.xml',
		   periodico: 'El País'
		  },
		  {
                   url: 'http://estaticos.elmundo.es/elmundo/rss/portada.xml',
                   periodico: 'El Mundo'
                  },
		  {
		    url: 'http://www.abc.es/rss/feeds/abcPortada.xml',
		    periodico: 'ABC'
		  },
                  {
                    url: 'http://feeds.feedburner.com/lavanguardia/home',
                    periodico: 'La Vanguardia'
                  },
                  {
                    url: 'http://www.larazon.es/rss/portada.xml',
                    periodico: 'La Razón'
                  }];

  console.log("url_data.length = " + url_data.length);

  for (var i=0; i < url_data.length; i++) {
    console.log("Iterando por i: " + i);
    console.log("Url #" + i + " = " + url_data[i].url);
    request(url_data[i].url, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        console.log("Todo ok para url: " + url_data[i].url);
        res.send(body);
      } else {
        console.log("No todo ok");
        response.send('Error!');
      }
    });

  }

});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});


