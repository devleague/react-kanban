const express = require('express');
const app = express();
const CONFIG = require('./config/config.json');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
//const route = require('./routes/gallery.js');
const methodOverride = require('method-override');
//const db = require('./models');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  store: new RedisStore(),
  secret: CONFIG.secret,
  resave: false,
  saveUninitialized: true
}));

app.use(methodOverride((req, res) => {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   var method = req.body._method;
   delete req.body._method;
   return method;
 }
}));

app.use(passport.initialize());
app.use(passport.session());

//app.use('/', route);

app.listen(3000,() => {
  console.log('server started');
  //db.sequelize.sync();
});