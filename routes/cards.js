const express = require('express');
const cardRouter = express.Router();
const Cards = require('../models').Cards;



cardRouter.route('/')
  .get((req,res) => {
    Cards.findAll()
    res.json()
  })


  module.exports = cardRouter;