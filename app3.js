var express = require('express');
var request = require('request');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/elpaisloader', function(req, res) {
  var elpais_url = 'http://ep00.epimg.net/rss/elpais/portada.xml';

  var parseString = require('xml2js').parseString;

  request(elpais_url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log("Todo ok");
        console.log(body);
        // parsear resultados obtenidos
        //console.log("Body = " + body);
        // parseString(body, function (err, result) {
        //     res.send(JSON.stringify(result));
        //     console.log("Result = " + result);
        //     console.log("***** Parseando JSON: ");
        //     console.log()
        //     // console.log(JSON.parse(body, function(k, v) {
        //     //   console.log("Parseado: " + k); // log the current property name, the last is "".
        //     //   return v;       // return the unchanged property value.
        //     // }););
        //     // res.send("BADABOOOOMMM");
        //     //res.send(result);
        //     // console.log(JSON.stringify(result));
        //     //res.send(result);
        //     // console.dir(result);
        // });

        var fs        = require('fs')
        var XmlStream = require('xml-stream') ;
        // request.pipe(fs.createWriteStream(elpais_url));
        var elpais_stream = "";
        // request(elpais_url).pipe(fs.createWriteStream(elpais_stream));
        // var stream = fs.createReadStream(body);
        var http = require('http');
        var request = http.get(elpais_url).on('response', function (response) {
            //TODO: process response here
        });
        var xml = new XmlStream(elpais_stream);
        xml.preserve('title', true);
        xml.collect('subitem');
        xml.on('endElement: id', function(item) {
          console.log(item);
        });

    } else {
        console.log("No todo ok");
        response.send('Error!');
    }
  });

});

// app.get('/elmundoloader', function(req, res) {
//   var elmundo_url = 'http://estaticos.elmundo.es/elmundo/rss/portada.xml';

//   request(elmundo_url, function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//       console.log("Todo ok");
//       res.send(body);
//     } else {
//       console.log("No todo ok");
//       response.send('Error!');
//     }
//   });

// });


// app.get('/abcloader', function(req, res) {
//   var abc_url = 'http://www.abc.es/rss/feeds/abcPortada.xml';

//   request(abc_url, function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//       console.log("Todo ok");
//       res.send(body);
//     } else {
//       console.log("No todo ok");
//       response.send('Error!');
//     }
//   });

// });



// app.get('/larazonloader', function(req, res) {
//   var larazon_url = 'http://www.larazon.es/rss/portada.xml';

//   request(larazon_url, function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//       console.log("Todo ok");
//       res.send(body);
//     } else {
//       console.log("No todo ok");
//       response.send('Error!');
//     }
//   });

// });

// app.get('/lavanguardialoader', function(req, res) {
//   var lavanguardia_url = 'http://feeds.feedburner.com/lavanguardia/home?fmt=xml';

//   request(lavanguardia_url, function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//       console.log("Todo ok");
//       res.send(body);
//     } else {
//       console.log("No todo ok");
//       response.send('Error!');
//     }
//   });

// });


app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
