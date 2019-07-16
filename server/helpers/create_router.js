const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createRouter = function(collection){

  const router = express.Router();

  //Get
  router.get('/', (req, res) => {
    collection
    .find()
    .then((docs) => res.json(docs))
    .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
   });
  })

}

export default createRouter;
