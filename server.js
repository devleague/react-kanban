const express = require('express');
const app = express();
const methodOverride = require("method-override")
const bodyParser = require('body-parser');
// const session = require('express-session');
const knex = require('./knex/knex.js');

const cards = require('./knex/models/cards.js');
const priorities = require('./knex/models/priorities.js');
const statuses = require('./knex/models/statuses.js');
const users = require('./knex/models/users.js');
const cors = require('cors');
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

// const galleryRoute = require('./routes/gallery.js');
// const authRoutes = require('./routes/auth.js');

// app.use(session({
//   store: new RedisStore({url: 'redis://redis:6379', logErrors: true}),
//   secret: 'p1',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static("public"));
app.use(cors());
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: '.hbs' }));
// app.set('view engine', '.hbs');

app.get("/cards", (req, res) => {
  let data = [];
  cards
    .fetchAll({ withRelated: ["priority_id", "status_id", "created_by", "assigned_to"] })
    .then(results =>
      data.push(results.serialize())
    )
    .then(results => {
      priorities
        .fetchAll()
        .then(results => {
          data.push(results.serialize())
        })
    })
    .then(results => {
      statuses
        .fetchAll()
        .then(results => {
          data.push(results.serialize())
        })
    })
    .then(results => {
      users
        .fetchAll()
        .then(results => {
          data.push(results.serialize())
          res.json(data)
        })
    })
    .catch(err => {
      res.json(err);
    })
})

app.post("/add", (req, res) => {
  const info = req.body.state;
  let data = [];

  cards
    .forge(info)
    .save()
    .then(results => {
      cards
        .fetchAll({ withRelated: ["priority_id", "status_id", "created_by", "assigned_to"] })
        .then(results => {
          data.push(results.serialize())
        })
        .then(results => {
          priorities
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          statuses
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          users
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
              res.json(data)
            })
        })
    })
    .catch(err => {
      res.json(err);
    })
})

app.put("/left/:id", (req, res) => {
  const { id } = req.params
  let info = {};
  let data = [];

  cards
    .where({ id })
    .fetch()
    .then(results => {
      switch (results.attributes.status_id) {
        case 3:
          info = {
            status_id: 2
          }
          break;
        case 2:
          info = {
            status_id: 1
          }
          break;
      }
      return results.save(info);
    })
    .then(results => {
      cards
        .fetchAll({ withRelated: ["priority_id", "status_id", "created_by", "assigned_to"] })
        .then(results => {
          data.push(results.serialize())
        })
        .then(results => {
          priorities
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          statuses
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          users
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
              res.json(data)
            })
        })
    })
    .catch(err => {
      res.json(err);
    })
})

app.put("/right/:id", (req, res) => {
  const { id } = req.params
  let info = {};
  let data = [];

  cards
    .where({ id })
    .fetch()
    .then(results => {
      switch (results.attributes.status_id) {
        case 1:
          info = {
            status_id: 2
          }
          break;
        case 2:
          info = {
            status_id: 3
          }
          break;
      }
      return results.save(info);
    })
    .then(results => {
      cards
        .fetchAll({ withRelated: ["priority_id", "status_id", "created_by", "assigned_to"] })
        .then(results => {
          data.push(results.serialize())
        })
        .then(results => {
          priorities
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          statuses
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
            })
        })
        .then(results => {
          users
            .fetchAll()
            .then(results => {
              data.push(results.serialize())
              res.json(data)
            })
        })
        .catch(err => {
          res.json(err);
        })
    })

})

app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})