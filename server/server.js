//install and import express, cors, mongodb
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
//middleware
//tell express to use cors and json
app.use(cors())//pass data between domains
app.use(express.json())//help work with post, can get req.body

//import mongo ,invoke connect on mongoClient
//get db, get collection , get router, tell express to use router with given route
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('mystics');
  const mysticsCollection = db.collection('mysticsCollection');
  const mysticsRouter = createRouter(mysticsCollection)
  app.use('/api/mystics', mysticsRouter);
  
  app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})