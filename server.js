const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');
const Tasks = db.tasks;
const Users = db.users;
const Status = db.status;
const Priority = db.priority;

app.get('/api/tasks', (req, res) => {

  Tasks.findAll({
    include: [{model: Users}]
  })
  .then( tasks => {
      console.log(tasks);
      res.json(tasks);
  });

});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});