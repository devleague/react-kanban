// server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// request handlers
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// database
const sequelize = require('sequelize');
const db = require('./models');
const { Card } = db;

// routes

app.use(express.static('./public'));

app.get('/404', (req, res) => {
	res.status(404);
	res.render('404');
});

app.use((req, res) => {
	res.redirect('/404');
});

// start server
if(!module.parent) {
	app.listen(PORT, _ => {
		console.log(`Server listening on port ${PORT}`);
		// db.sequelize.sync();
	});
}

module.exports = app;
