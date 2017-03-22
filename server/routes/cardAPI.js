// router
const express = require('express');
const router = express.Router();

// database
const sequelize = require('sequelize');
const db = require('../models');
const { Card } = db;

router.get('/all', (req, res) => {
	Card.findAll()
		.then(cards => res.send(cards));
});

router.post('/new', ({body: {title, priority, by, to}}, res) => {
	Card.create({type: "queue-card", title, priority, by, to})
		.then(card => res.send(card));
});

module.exports = router;
