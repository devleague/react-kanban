const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
var db = require('./models');
var Task = db.Task;

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));


app.get('/tasks', function(req, res) {
  Task.findAll()
    .then(function(task) {
      res.json(task);
    });
})

app.post('/tasks', function(req, res) {
  console.log("hello");
  Task.create({
    Title: req.body.Title,
    Priority: req.body.Priority,
    Status: req.body.Status,
    CreatedBy: req.body.CreatedBy,
    AssignedTo: req.body.AssignedTo
  })
  .then(function(task) {
    res.json(task)
  });
})

// app.delete('/tasks', function (req, res) {
//   console.log("Destroy");
//   Task.destroy({
//     where: {
//       Title: req.body.Title
//     }
//   })
//   .then(function(task) {
//     res.json(task)
//   });
// })

app.listen(app.get('port'), function() {
  console.log(`Server listen on port ${app.get('port')}`);
})
