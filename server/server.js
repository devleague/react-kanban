const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const db = require('./models');
const Card = db.Card;
const User = db.User;
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const RedisStore = require('connect-redis')(session);
const CONFIG = require('./config/config.json');

app.use(bp.urlencoded({ extended: true }));

app.use(
  session({
    store: new RedisStore(),
    secret: CONFIG.SESSION_SECRET,
    cookie: {
      maxage: 600
    }
  })
);

app.use(
  session({
    secret: 'keyboard cat'
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      where: {
        username: username
      }
    })
      .then(user => {
        bcrypt
          .compare(password, user.password)
          .then(result => {
            if (result) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: 'Incorrect Password'
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        return done(null, false, {
          message: 'Incorrect Username'
        });
      });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(userId, done) {
  console.log('adding user information into the req object', userId);
  User.findOne({
    where: {
      id: userId
    }
  })
    .then(user => {
      done(null, {
        id: user.id,
        username: user.username
      });
      //^ store the serialized information into the request object
    })
    .catch((user, err) => {
      done(err, user);
    });
});

app.post('/post', (req, res) => {
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo,
    status: 'inQueue'
  }).then(data => {
    Card.findAll().then(cards => {
      res.json(cards);
    });
  });
});

app.get('/cards', (req, res) => {
  Card.findAll().then(cards => {
    res.json(cards);
  });
});

app.get('/users', (req, res) => {
  User.findAll().then(users => {
    res.json(users);
  });
});

app.delete('/delete/:id', (req, res) => {
  var cardId = parseInt(req.params.id);
  console.log(cardId);

  Card.destroy({
    where: {
      id: cardId
    }
  }).then(data => {
    Card.findAll().then(cards => {
      res.json(cards);
    });
  });
});

app.put('/move/right/:id', (req, res) => {
  var cardId = parseInt(req.params.id, 10);
  Card.findById(cardId).then(card => {
    if (card.dataValues.status === 'inQueue') {
      card
        .update({
          status: 'inProgress'
        })
        .then(() => {
          Card.findAll().then(cards => {
            res.json(cards);
          });
        });
    } else if (card.dataValues.status === 'inProgress') {
      card
        .update({
          status: 'done'
        })
        .then(() => {
          Card.findAll().then(cards => {
            res.json(cards);
          });
        });
    }
  });
});

app.put('/move/left/:id', (req, res) => {
  var cardId = parseInt(req.params.id, 10);
  Card.findById(cardId).then(card => {
    if (card.dataValues.status === 'inProgress') {
      card
        .update({
          status: 'inQueue'
        })
        .then(() => {
          Card.findAll().then(cards => {
            res.json(cards);
          });
        });
    } else if (card.dataValues.status === 'done') {
      card
        .update({
          status: 'inProgress'
        })
        .then(() => {
          Card.findAll().then(cards => {
            res.json(cards);
          });
        });
    }
  });
});

app.put('/edit/:id', (req, res) => {
  var cardId = parseInt(req.params.id, 10);
  Card.findById(cardId).then(card => {
    card
      .update({
        title: req.body.title,
        priority: req.body.priority,
        createdBy: req.body.createdBy,
        assignedTo: req.body.assignedTo
      })
      .then(() => {
        Card.findAll().then(cards => {
          res.json(cards);
        });
      });
  });
});

app.post('/login/new', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    User.findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        password: hash
      }
    }).then(() => {
      User.findAll()
        .then(users => {
          res.json(users);
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.body.username);
  res.json({ username: req.body.username });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
});

app.get('/auth', (req, res) => {
  if (req.user) {
    res.json(req.user.username);
  } else {
    console.log('res');
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize.sync();
});
