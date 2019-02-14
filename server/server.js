const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const kanban = require('./routes/kanban');
const redis = require('connect-redis')(session);

const User = require('./database/models/User');
const app = express();
const PORT = process.env.SERVER_PORT;
const ENV = process.env.NODE_ENV;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_URI = process.env.REDIS_HOST + ':' + process.env.REDIS_HOST_PORT;
const saltRounds = 12;

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new redis({ url: REDIS_URI, logErrors: true }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id
  });
});

passport.deserializeUser((user, done) => {
  new User({ id: user.id }).fetch()
    .then(dbUser => {
      dbUser = dbUser.toJSON();
      return done(null, {
        id: dbUser.id,
        username: dbUser.username
      });
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    });
});

passport.use(new LocalStrategy(function (username, password, done) {
  return new User({ username: username })
    .fetch()
    .then((user) => {
      user = user.toJSON();

      if (user === null) {
        return done(null, false, { message: 'bad username or password' });
      }
      else {
        bcrypt.compare(password, user.password)
          .then((res) => {
            if (res) { return done(null, user); }
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          });
      }
    })
    .catch(err => {
      console.log('error: ', err);
      return done(err);
    });
}));

app.post('/register', (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) { console.log(err); }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) { console.log(err); }
      return new User({
        username: req.body.username,
        password: hash,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
      })
        .save()
        .then((user) => {
          res.json({ success: true });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ success: false, error: err });
        });
    });
  });
});

app.post('/login', passport.authenticate('local'), function (req, res) {
  res.json({ success: true });
});

app.get('/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.json({ success: true });
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else {
    res.status(401).json({ success: false, error: 'not authenticated' });
  };
};

app.use('/kanban', kanban);

app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});

module.exports = app;