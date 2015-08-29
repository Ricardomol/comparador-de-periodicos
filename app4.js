var express = require('express');
var request = require('request');
var request = require("request");
var cheerio = require("cheerio");
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/elpaisloader', function(req, res) {
  var elpais_url = 'http://ep00.epimg.net/rss/elpais/portada.xml';

  request(elpais_url, function(error, response, body) {
    var $ = cheerio.load(body, {ignoreWhitespace: true, xmlMode: true});

    var titles = [];
    var links = [];
    $("title").slice(0, 20).each(function() {
      var title = $(this) + "<br>";
      console.log("*** Title = " + $(this).text() + "<br>");
      titles.push("<a href='" + $(this).next().text() +"' target='_blank'>"+$(this).text() + "</a><br>");
      console.log("*** Link = " + $(this).next().text());
      links.push($(this).next().text());
      console.log(" ");
    });
    console.log("LINKS = " + links);
    console.log("TITLES = " + titles);
    res.send(titles);
  });

});


app.get('/elmundoloader', function(req, res) {
  var elmundo_url = 'http://estaticos.elmundo.es/elmundo/rss/portada.xml';

  request(elmundo_url, function(error, response, body) {
    var $ = cheerio.load(body, {ignoreWhitespace: true, xmlMode: true});

    var titles = [];
    var links = [];
    $("title").slice(0, 20).each(function() {
      var title = $(this) + "<br>";
      console.log("*** Title = " + $(this).text() + "<br>");
      titles.push("<a href='" + $(this).next().next().next().text() +"' target='_blank'>"+$(this).text() + "</a><br>");
      console.log("*** Link = " + $(this).next().next().next().text());
      links.push($(this).next().text());
      console.log(" ");
    });
    console.log("LINKS = " + links);
    console.log("TITLES = " + titles);
    res.send(titles);
  });

});


app.get('/abcloader', function(req, res) {
  var abc_url = 'http://www.abc.es/rss/feeds/abcPortada.xml';

  request(abc_url, function(error, response, body) {
    var $ = cheerio.load(body, {ignoreWhitespace: true, xmlMode: true});

    var titles = [];
    var links = [];
    $("title").slice(0, 20).each(function() {
      var title = $(this) + "<br>";
      console.log("*** Title = " + $(this).text() + "<br>");
      titles.push("<a href='" + $(this).next().text() +"' target='_blank'>"+$(this).text() + "</a><br>");
      console.log("*** Link = " + $(this).next().next().text());
      links.push($(this).next().text());
      console.log(" ");
    });
    console.log("LINKS = " + links);
    console.log("TITLES = " + titles);
    res.send(titles);
  });

});



app.get('/larazonloader', function(req, res) {
  var larazon_url = 'http://www.larazon.es/rss/portada.xml';

  request(larazon_url, function(error, response, body) {
    var $ = cheerio.load(body, {ignoreWhitespace: true, xmlMode: true});

    var titles = [];
    var links = [];
    $("title").slice(0, 20).each(function() {
      var title = $(this) + "<br>";
      console.log("*** Title = " + $(this).text() + "<br>");
      titles.push("<a href='" + $(this).next().text() +"' target='_blank'>"+$(this).text() + "</a><br>");
      console.log("*** Link = " + $(this).next().next().text());
      links.push($(this).next().text());
      console.log(" ");
    });
    console.log("LINKS = " + links);
    console.log("TITLES = " + titles);
    res.send(titles);
  });

});


app.get('/lavanguardialoader', function(req, res) {
  var lavanguardia_url = 'http://feeds.feedburner.com/lavanguardia/home?fmt=xml';

  request(lavanguardia_url, function(error, response, body) {
    var $ = cheerio.load(body, {ignoreWhitespace: true, xmlMode: true});

    var titles = [];
    var links = [];
    $("title").slice(0, 20).each(function() {
      var title = $(this) + "<br>";
      console.log("*** Title = " + $(this).text() + "<br>");
      titles.push("<a href='" + $(this).next().text() +"' target='_blank'>"+$(this).text() + "</a><br>");
      console.log("*** Link = " + $(this).next().next().text());
      links.push($(this).next().text());
      console.log(" ");
    });
    console.log("LINKS = " + links);
    console.log("TITLES = " + titles);
    res.send(titles);
  });

});


app.listen(3000, function() {
  console.log('Listening on port 3000... hostia app4 coño ya joder');
});
