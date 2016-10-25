const express = require('express');
const cardRouter = express.Router();
const Cards = require('../models').card;



cardRouter.route('/')
  .get((req,res) => {
    Card.findAll()
    .then(()=>{
    res.json({sucess:true})
    });
  })
  .post((req,res) => {
    Card.create({
      Title:req.body.Title,
      Priority:req.body.Priority,
      Createby:req.body.Createdby,
      assignedto:req.body.assignedto
    })
  })



module.exports = cardRouter;