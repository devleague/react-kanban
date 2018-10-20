require('dotenv').config();
const pg = require('pg');
const Card = require('./src/server/db/models/cards')
const express = require('express');
const app = express();
const cors = require('cors');
const bp = require('body-parser');

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.get('/', (req, res) => {
    Card
    .fetchAll()
    .then( result => {
        console.log('pls', result);
        res.json(result.serialize())
    })
    .catch( err => {
        console.log('err', err);
        res.json('err');
    })
})

app.post('/add', (req, res) => {
    // const { id } = req.params;
    console.log('pls', req.body)
    const payload = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    console.log('payload', payload);
    return new Card
    // .forge(payload)
    .save(payload)
    .then( result => {
        console.log('serialize?', result);
        res.json(result.serialize())
    })
    .catch( err => {
        console.log('err', err)
        res.json(err);
    })
})

app.listen(process.env.EXPRESS_CONTAINER_PORT, () => {
    console.log(`Started app on port: ${process.env.EXPRESS_CONTAINER_PORT}`);
});