const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
const Card = db.Card;
const bp = require("body-parser");

app.use(bp.urlencoded());

app.post("/api/create", (req, res) => {
  console.log(req.body);
  Card.create({
    Title: req.body.Title,
    Priority: req.body.Priority,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  })
    .then((data) => {
      console.log(data.dataValues);
    })
  res.end();
})

app.get("/cards", (req, res) => {
  Card.findAll()
    .then((cards) => {
      res.json(cards);
    })
})

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync();
})
