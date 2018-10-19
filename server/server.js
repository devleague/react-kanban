const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 5050;
const bp = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const UserModel = require('./models/UserModel.js');
const PriorityModel = require('./models/PriorityModel.js');
const StatusModel = require('./models/StatusModel.js');
const CardModel = require('./models/CardModel.js');

app.use(session({
  store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'lollerkates', // SECRET IS USED IN THE ALGORITHMS TO CREATE KEYS
  resave: false, // IF THERE IS NO CHANGE, SAVE IT BUT SET TO FALSE TO PREVENT CREATING SESSIONS
  saveUninitialized: true // 
}));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

/* GET Pages */
app.get('/usernames', (req,res)=> {
  UserModel
    .fetchAll()
    .then(items => {
      res.json(items.serialize());
    })
    .catch(err => {
      console.log(err, "ERR");
      res.json("ERROR");
    })
})

app.get('/prioritynames', (req, res) => {

  PriorityModel
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
      console.log('items: ', items)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.get('/statusnames', (req, res) => {

  StatusModel
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
      console.log('items: ', items)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.get('/carditems', (req, res) => {

  CardModel
    .fetchAll()
    .then(carditems => {
      res.json(carditems.serialize())
      console.log('carditems: ', carditems)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

/* End GET Pages */

/* POST Pages*/
// Add New Task //
app.post('/newtask', (req, res) => {
console.log("\nreq.body:", req.body);
let task = {};
task.priority_id = req.body.priority_id;
task.status_id = req.body.status_id;
task.created_by = req.body.created_by;
task.assigned_to = req.body.assigned_to;

console.log(task);

// For cards_table

CardModel
  .forge({
    // card_id: Math.floor((Math.random() * 1256) + 1),
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority_id,
    status_id: req.body.status_id,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .save()
  .then(() => {
    return CardModel
      .fetchAll()
      .then(carditems => {
        res.json(carditems.serialize());
      })
  })
  .catch(err => {
    console.log('POST NEW TASK BACKEND ERROR', err);
    res.json("RES.JSON ERROR");
  });
})

/* End POST Pages*/


/* PUT Pages */

// DELETE Works in Postman //
app.put('/delete', (req, res) => {

  const card_id = req.body.card_id

  CardModel
    .where({ card_id })
    .destroy()
    .then(carditems => {
      res.json(carditems.serialize())
    })
    .catch(err => {
      console.log('DELETE ERR: ', err)
    })

})
/* End PUT Pages*/

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})