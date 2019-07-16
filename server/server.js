const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then(() => {
const db = client.db('flights_db');
const flightsCollection = db.collection('flights')
app.use('api/flights/', createRouter(flightsCollection));

}).catch(console.error);

app.listen(3000, function(){
  console.log('server running');
});
