const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');

const APP_MODE = 'development';
const Knex = require('knex');
const dbConfig = require('./knexfile');
const knex = Knex(dbConfig[APP_MODE]);

const bcrypt = require('bcrypt-as-promised');

const cookieSession = require('cookie-session');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const request = require('request');

const cheerio = require('cheerio');

app.use(cookieSession({
  name: 'auth_app_user',
  keys: ['socure1', 'socure2']
}));

//ROUTING

app.get('/', function(req, res) {

  var str = "Macaroni"

  var splitStr = str.split(" ");

  splitStr.forEach(function(el){
    el.replace(/\.$/, " ");
  })

  var newStr = splitStr.filter(function (el){
    return el !== 'A'
    && el !== 'the'
    && el !== 'and'
    && el !== 'to'
    && el !== 'a'
    && el !== 'on'
    && el !== 'I'
    && el !== 'was'
    && el !== 'an'
    && el !== 'that'
    && el !== 'is';
  })

  console.log(newStr);
  newStr.forEach(function(el) {

    console.log(el)
    console.log('http://dreammoods.com/cgibin/dreamdictionarysearch.pl?method=exact&header=dreamsymbol&search=' + el);
    console.log("Setting Promise")

    return new Promise(function(resolve, reject) {

      request('http://dreammoods.com/cgibin/dreamdictionarysearch.pl?method=exact&header=dreamsymbol&search=' + el, {
        timeout: 2000
      }, function interpreter(err, response, body) {

        if (err) {
          console.log('Broken');
          console.log("Logging request errors:")
          console.log(err.code === 'ETIMEDOUT'); //Is it a timeout error?
          console.log(err.connect === true); //Is it a connect timeout error?
          resolve('')
        } else {
          console.log("Starting cheerio...")

          const $ = cheerio.load(body);

          el = el.charAt(0).toUpperCase() + (el.slice(1, el.length));

          $doc = $('td[width=750]');

          var regex = new RegExp("\\b" + el + "\\b")

          for (var j = 0; j < $doc.children().length; j++) {
            if ($doc.children().eq(j).text().match(regex)) {
              console.log($doc.children().eq(j).text())
              console.log("")
              console.log("Sending...")
              res.send($doc.children().eq(j).text())
            }
          }

          //request end
        }

        //interpreter end
      })

      //Promise end
    })

    //newStr.forEach end
  })

  //app.get '/' end
});

//CATCH all
app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(PORT, function() {
  console.log('RUNNING!', PORT);
});
