const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const Cards = require('./db/models/Cards.js');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser({ extended: true }))
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', () => {
    res.sendFile('../build/index.html')
})

app.get('/cards', (req, res) => {
    Cards
        .fetchAll()
        .then(cards => {
            res.json(cards.serialize())
        })
        .catch(err => {
            console.log('error', err)
        })
})

app.post('/card/new', (req, res) => {
    console.log('was server /item/new called', req.body)
    const card = req.body
    Cards
        .forge(card)
        .save()
        .then(result => {
            return Cards.fetchAll()
        })
        .then(newCards => {
            res.json(newCards.serialize())
        })
        .catch(err => {
            console.log('err', err)
        })
})
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
