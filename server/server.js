const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
const Card = db.Card;
const bp = require("body-parser");

app.use(bp.urlencoded( { extended: true }));

app.post("/post", (req, res) => {
  console.log("FROM SERVER REQ", req.body);
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo,
    status: "inQueue"
  })
    .then((data) => {
      Card.findAll()
        .then((cards) => {
          res.json(cards);
        })
    })
})

app.get("/cards", (req, res) => {
  Card.findAll()
    .then((cards) => {
      res.json(cards);
    })
})

app.delete("/delete/:id", (req, res) => {
  var cardId = parseInt(req.params.id);
  console.log(cardId);

  Card.destroy({
    where: {
      id: cardId
    }
  })
  .then((data) => {
    Card.findAll()
      .then((cards) => {
        res.json(cards);
      })
  })

})

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync();
})
