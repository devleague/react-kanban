const express = require('express');
const cardRouter = express.Router();
const Card = require('../models').Card;

cardRouter.route('/')
  .get((req,res) => {
    Card.findAll()
    .then((cards)=>{
      res.json({cards,
        sucess:true});
    });
  })
  .delete((req,res) => {

  })

cardRouter.route('/new')
  .post((req,res) => {
    console.log(req.body);
    Card.create({
      Title:req.body.Title,
      Priority:req.body.Priority,
      Status: 'Queue',
      Createdby:req.body.Createdby,
      Assignedto:req.body.Assignedto
    })
    .then(()=>{
      res.json({sucess:true});
    });
  });

cardRouter.route('/:id')
  //show specific card
  .get((req,res) => {
    Card.find({
      where:{
        id:req.params.id
      }
    })
    .then(data => {
       res.json({sucess:true});
    });
  });
  //edit card

cardRouter.route('/:id/edit')
  .put((req,res) => {
    Card.update({
       Status: req.body.Status
    },{
      where: {
        id: req.params.id
      }
    });
  })
  .delete((req,res) => {
    Card.destroy({
      where:{
        id: req.params.id,
        Status: 'Completed'
      }
    });
  });


module.exports = cardRouter;