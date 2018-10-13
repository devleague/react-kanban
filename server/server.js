const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 5050;
const path = require('path');
// const bp = require('body-parser');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');

const UserModel = require('./models/UserModel.js');
// const PriorityModel = require('./models/PriorityModel.js');
// const StatusModel = require('./models/StatusModel.js');
// const CardModel = require('./models/CardModel.js');

// app.use(session({
//   store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
//   secret: 'lollerkates', // SECRET IS USED IN THE ALGORITHMS TO CREATE KEYS
//   resave: false, // IF THERE IS NO CHANGE, SAVE IT BUT SET TO FALSE TO PREVENT CREATING SESSIONS
//   saveUninitialized: true // 
// }));

// app.use(passport.initialize());
// app.use(passport.session());
//app.use(express.static('public'));
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));


//app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   res.json('hello world')
// })

app.get('/items', (req,res)=> {
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
    .then(items => {
      res.json(items.serialize())
      console.log('items: ', items)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}... this is from the docker-compose - look to the left and check if it says react-app`)
})