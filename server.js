require('dotenv').config();
const pg = require('pg');
const Card = require('./src/server/db/models/cards')
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log('pls');
    Card
    .fetchAll()
    .then( result => {
        return res.JSON(result.serialize())
    })
})

app.listen(process.env.EXPRESS_CONTAINER_PORT, () => {
    console.log(`Started app on port: ${process.env.EXPRESS_CONTAINER_PORT}`);
});