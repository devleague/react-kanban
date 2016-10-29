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

  });

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
      Card.findAll()
      .then((cards) => {
        res.json({cards,
          success:true
        })
      })

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
cardRouter.route('/edit')
  .put((req,res) => {
    console.log("hit card route")
    console.log("req.body%%%%%%",req.body.Status);
    if(req.body.Status === "Queue") {
      Status = "In Progress";
    } else {
      Status = "Done";
    }
    Card.update({
       Status: Status
    },{
      where: {
        Title: req.body.Title
      },
      returning: true
    })
    .then(( card )=>{
      console.log(card[1][0].dataValues)
      res.send({
        success: true,
        updatedCard: card[1][0].dataValues
      })
    })
    .catch(err => {
      console.error(err)
    })
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