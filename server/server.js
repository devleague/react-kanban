const express = require('express');
const app = express();
const methodOverride = require("method-override")
const bodyParser = require('body-parser');
const knex = require('./db/knex.js');

const cards = require('./db/models/Cards.js');
const priorities = require('./db/models/Priorities.js');
const statuses = require('./db/models/Statuses.js');
const users = require('./db/models/Users.js');
// const cors = require('cors');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(express.static("public"));
// app.use(cors());
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})