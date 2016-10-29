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
        });
      });
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

  //edit status
cardRouter.route('/edit')
  .put((req,res) => {
    if (req.body.Status === "Queue") {
      Status = "In Progress";
    } else if (req.body.Status === "Done"){
      Status = "In Progress";

    } else if (req.body.Status === "hello"){
      Status = "Queue";

    }
     else {
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
    .then((card) => {
      res.send({
        success: true,
        updatedCard: card[1][0].dataValues
      });
    })
    .catch(err => {
      console.error(err);
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

  cardRouter.route('/editPost')
  .put((req,res) => {
    console.log("req.body", req.body)
    Card.update({
      Title:req.body.Title,
      Priority:req.body.Priority,
      Status: req.body.Status,
      Createdby:req.body.Createdby,
      Assignedto:req.body.Assignedto
    },{
      where: {
        Title: req.body.Title
      },
      returning: true
    })
    .then((card) => {
      res.send({
        success: true,
        updatedCard: card[1][0].dataValues
      });
    })
    .catch(err => {
      console.error(err);
    });
  })


module.exports = cardRouter;