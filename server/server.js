const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', require('./api.js'));

module.exports = app;