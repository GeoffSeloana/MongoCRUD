const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://cfts:cfts123@ds223760.mlab.com:23760/mongo_testdb', (err, client) => {
  if (err) return console.log(err)
  
  db = client.db('mongo_testdb') // whatever your database name is
  
  app.listen(8080, () => {
    console.log('listening on 8080')
  })
  
  //Post
  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
    
  })
  
})





