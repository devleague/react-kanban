// router
const express = require('express');
const router = express.Router();

// database
const sequelize = require('sequelize');
const db = require('../models');
const { Card } = db;

router.get('/all', (req, res) => {
	Card.findAll().then(cards => res.send(cards))
	.catch(_ => res.send({"success": false}));
});

router.get('/all/:type', (req, res) => {
	Card.findAll({where: {type: req.params.type}})
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
		.then(_ => Card.findOne({where: {id: req.params.id}}))
		.then(card => res.json(card))
		.catch(_ => res.send({"success": false}));
});

router.delete('/delete/:id', (req, res) => {
	Card.destroy({where: {id: req.params.id}})
		.then(_ => res.send({"success": true}))
		.catch(_ => res.send({"success": false}));
});

module.exports = router;
