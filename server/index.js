const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')
const db = require('../database/connection.js')


app.use(express.json());

db.connect((err)=>{
  if (!err) {
    console.log('Connected to grocery database.');
  }
})



app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


app.get('/movies', (req, res) => {
  var querystring = 'SELECT * FROM movies';
db.query(querystring, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    res.status(200).send(results);
  }
})
})


app.post('/movies', (req, res) => {

  var querystring = `INSERT INTO movies (title) VALUES ("${req.body.title}")`;
  console.log('qstring!', querystring);
  db.query(querystring, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('posted successfully!')
      res.status(201).send(results);
    }
  })
})