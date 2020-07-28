const express = require('express');
const app = express();
const port = 3020;
const path = require('path');
const App = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../dist')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/scores/retrieve', (req, res) => {
  App.findAll({ limit: 10 , order: [['topScore', 'DESC']]})
    .then(
      data => {
        res.send(data);
      })
    .catch(
      err => {
        if(err) {
          console.log(err)
        }
      })
});

app.post('/scores/submit', (req, res) => {
  console.log('req body', req.body)
  var obj = {
    topScore: req.body.topScore,
    name: req.body.name,
    password: req.body.password
  }
  if (req.body.topScore > 50) {
    obj.topScore = 0
    obj.name = 'Oopsie I tried to cheat'
  };

  App.create(obj)
  .then(
    console.log(`Added ${obj} to database!`)
  )
  .catch(
    err => {
      if (err) {
        console.log(err)
      }
    }
  )

});

app.listen(process.env.PORT || port, () => console.log(`Listening at ${port}`));

module.exports = app;