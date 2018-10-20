const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989
const bp = require('body-parser');
const path = require('path')
const cors = require('cors')
const Cards = require('./db/models/Cards')
const Users = require('./db/models/Users')

app.use(cors())
app.use(express.static(path.join(__dirname, '../build')))
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json())

app.get('/cards', (req, res) => {
  Cards.fetchAll()
  .then( cards => {
    res.json(cards.serialize())
    })
  .catch( err => {
    console.log('err', err)
  })
})

app.get('/users', (req, res) => {
  Users.fetchAll()
  .then( users => {
    // console.log('users', users)
    res.json(users.serialize())
    }
  )
  .catch( err => {
    console.log('err', err)
  })
})

app.post('/cards', (req, res) => {
  const newCard = req.body
  console.log('post, cards', newCard )
  Cards
  .forge({
    title: newCard.title,
    body: newCard.body,
    priority_id: newCard.priority_id,
    status_id: newCard.status_id,
    assigned_to: newCard.assigned_to
  })
  .save()
  .then( data => {
    res.json(data)
  })
  .catch( err => {
    console.log('Error', err)
    res.json('errr')
  })

})

app.delete('/cards', (req, res) => {
  let card = req.body
  let card_id = card.card.card_id
  console.log(card_id)
  Cards
  .where({ card_id })
  .destroy()
  .then( results => {
    res.json(data)
  })
  .catch( err => {
    console.log('delete err', err)
  })
})


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
