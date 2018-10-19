const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const bodyParser = require('body-parser')
const Cards = require('./db/models/cards.js')

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('../build/index.html')
})

app.get('/items', (req, res) => {
  Cards
    .fetchAll()
    .then( items => {
      res.json(items)
    })
    .catch( err => {
      console.log('error', err)
    })

app.post('/newCard', (req, res) => {
  console.log('req.body', req.body)
  // res.json(req.body)
  const newTask = {
    title: req.body.title,
    body: req.body.body,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  }
  console.log('newTask', newTask)

  Cards
    .forge(newTask)
    .save()
    .then(() => {
      return Cards.fetchAll()
    })
    .then(allTasks => {
      console.log(allTasks);
      res.json(allTasks.serialize());
    })
    .catch(err => {
      console.log('err', err)
    })
})  

  // res.json({
  //   items: [{
  //     id: 1,
  //     title: "Clean car",
  //     body: "Give it the ol vacuum",
  //     priority: "low",
  //     status: "Todo",
  //     createdBy: "Jamie",
  //     assignedTo: "Carl"
  //   },
  //   {
  //     id: 2,
  //     title: "Clean room",
  //     body: "Give it the ol broom",
  //     priority: "low",
  //     status: "Todo",
  //     createdBy: "Harsh",
  //     assignedTo: "Sarah"
  //   },
  //   {
  //     id: 3,
  //     title: "Walk the doggy",
  //     body: "Give it the ol leash",
  //     priority: "medium",
  //     status: "Doing",
  //     createdBy: "Romeo",
  //     assignedTo: "Nick"
  //   },
  //   {
  //     id: 4,
  //     title: "Take out trash",
  //     body: "Give it the ol can",
  //     priority: "low",
  //     status: "Doing",
  //     createdBy: "Jamie",
  //     assignedTo: "Wymin"
  //   },
  //   {
  //     id: 5,
  //     title: "Study programming",
  //     body: "Give it the ol college whirl",
  //     priority: "high",
  //     status: "Done",
  //     createdBy: "May",
  //     assignedTo: "Doug"
  //   },
  //   {
  //     id: 6,
  //     title: "Grocery shopping",
  //     body: "Give it the ol credit card",
  //     priority: "medium",
  //     status: "Done",
  //     createdBy: "Harsh",
  //     assignedTo: "Sarah"
  //   }]
  // })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

// queueItems: [
//   {
//     id: 1,
//     title: "Clean car",
//     body: "Give it the ol vacuum",
//     priority: "low",
//     status: "Todo",
//     createdBy: "Jamie",
//     assignedTo: "Carl"
//   },
//   {
//     id: 2,
//     title: "Clean room",
//     body: "Give it the ol broom",
//     priority: "low",
//     status: "Todo",
//     createdBy: "Harsh",
//     assignedTo: "Sarah"
//   }
// ],
// inProgressItems: [
//   {
//     id: 3,
//     title: "Walk the doggy",
//     body: "Give it the ol leash",
//     priority: "medium",
//     status: "Doing",
//     createdBy: "Romeo",
//     assignedTo: "Nick"
//   },
//   {
//     id: 4,
//     title: "Take out trash",
//     body: "Give it the ol can",
//     priority: "low",
//     status: "Doing",
//     createdBy: "Jamie",
//     assignedTo: "Wymin"
//   }
// ],
// doneItems: [
//   {
//     id: 5,
//     title: "Study programming",
//     body: "Give it the ol college whirl",
//     priority: "high",
//     status: "Done",
//     createdBy: "May",
//     assignedTo: "Doug"
//   },
//   {
//     id: 6,
//     title: "Grocery shopping",
//     body: "Give it the ol credit card",
//     priority: "medium",
//     status: "Done",
//     createdBy: "Harsh",
//     assignedTo: "Sarah"
//   }
// ]
// ]