const express = require('express');
const app = express();
//const CONFIG = require('./config/config.json');
const route = require('./routes/cards.js');
const bodyParser = require('body-parser');
const db = require('./models');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', route);

app.listen(3000,() => {
  console.log('server started');
  db.sequelize.sync();
});