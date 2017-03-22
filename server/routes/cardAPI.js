// router
const express = require('express');
const router = express.Router();

// database
const sequelize = require('sequelize');
const db = require('../models');
const { Card } = db;

router.get('/all/:type', (req, res) => {
	Card.findAll()
		.then(cards => res.json({"queue": cards}))
		.catch(_ => res.send({"success": false}));
});

router.get('/queue', (req, res) => {
	Card.findAll({where: {type: "queue-card"}})
		.then(cards => res.send(cards))
		.catch(_ => res.send({"success": false}));
});

router.get('/progress', (req, res) => {
	Card.findAll({where: {type: "progress-card"}})
		.then(cards => res.send(cards))
		.catch(_ => res.send({"success": false}));
});

router.get('/done', (req, res) => {
	Card.findAll({where: {type: "done-card"}})
		.then(cards => res.send(cards))
		.catch(_ => res.send({"success": false}));
});

router.post('/new', ({body: {title, priority, by, to}}, res) => {
	Card.create({type: "queue-card", title, priority, by, to})
		.then(card => res.send(card))
		.catch(_ => res.send({"success": false}));
});

router.put('/edit/:id', (req, res) => {
	const {title, type, priority, by, to} = req.body;
	Card.update(
		{title, type, priority, by, to},
		{where: {id: req.params.id}}
	)
		.then(card => res.send(card))
		.catch(_ => res.send({"success": false}));
});

router.delete('/delete/:id', (req, res) => {
	Card.destroy({where: {id: req.params.id}})
		.then(_ => res.send({"success": true}))
		.catch(_ => res.send({"success": false}));
});

module.exports = router;
