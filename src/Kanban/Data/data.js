// const express = require('express');
// const app = express();
// const knex = require('./knex/knex.js');

// const cards = require('./knex/models/cards.js');
// const priorities = require('./knex/models/priorities.js');
// const statuses = require('./knex/models/statuses.js');
// const users = require('./knex/models/users.js');

// app.get("/cards", (req, res) => {
//   cards
//     .fetchAll({ withRelated: ["priority_id", "status_id", "created_by", "assigned_to"] })
//     .then(results =>
//       results.serailize()
//     )
//     .catch(err => {
//       res.json(err);
//     })
// })


// export default data;