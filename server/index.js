const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

// const knex = require('./middleware/knex');
const APP_MODE = 'development';
const Knex = require('knex');
const dbConfig = require('./knexfile');
const knex = Knex(dbConfig[APP_MODE]);

const bcrypt = require('bcrypt-as-promised');
// const cookieSession = require('cookie-session');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const request = require('request');
const cheerio = require('cheerio');

// app.use(cookieSession({
//   name: 'auth_app_user',
//   keys: ['socure1', 'socure2']
// }));

//CORS for Client
const OPTIONS = 'OPTIONS';

// Pull out CORS headers into a constant.
const CORS_HEADERS = Object.freeze({'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Headers': 'Content-Type, authorization',
'Access-Control-Allow-Credentials': 'true',
'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH'});

app.use('/*', (req, res, next) => {
  res.set(CORS_HEADERS);

  if (req.method === OPTIONS) {
    // Handling for preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});

//ROUTING

  //ADD USER
app.post('/api/users/', function (req, res) {

  bcrypt.hash(req.body.password, 12)
    .then(function (digest) {
      // use knex to insert the digested password
      knex('users')
      .insert({
          email: req.body.email,
          hashed_password: digest
        }, '*')
        .then(function (users) {
          const user = users[0];

          res.sendStatus(204);
        })
    })

    .catch(function (err) {
      console.log('api/users/ err:' + err);
      res.sendStatus(204);
    });

});

  //MAKE POSTS
app.use('/api', require('./routes/posts'))

  //INTERPRET (SCRAPER)
app.get('/test', function(req, res) {

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
          console.log('Interpreter Broken');
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
