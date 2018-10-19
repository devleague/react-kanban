require('dotenv').config();
const pg = require('pg');
const Card = require('./src/server/db/models/cards')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/cards', (req, res) => {
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

app.listen(process.env.EXPRESS_CONTAINER_PORT, () => {
    console.log(`Started app on port: ${process.env.EXPRESS_CONTAINER_PORT}`);
});