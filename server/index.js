const express = require('express');
const app = express();
const port = 3020;
const path = require('path');
const App = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../dist')));

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

});

app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;