const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 5050
const path = require('path')
// const Items = require('./db/models/Items.js');


// app.use(express.static(path.join(__dirname, '../build')))

// app.get('/', () => {
//   res.sendFile('../build/index.html')
// })

app.get('/items', (req, res) => {
  // res.json({
  //   items: [{
  //       id: 1,
  //       name: 'A Large Healing Potion',
  //       weight: 0.1,
  //       type: 'consumable'
  //     },
  //     {
  //       id: 2,
  //       name: 'Wirts Leg',
  //       weight: 10,
  //       type: 'weapon'
  //     },
  //     {
  //       id: 3,
  //       name: 'Dreamwalker Spaulders',
  //       weight: 2,
  //       type: 'armor'
  //     }
  //   ]
  // })
  // Items
  //   .fetchAll()
  //   .then( items => {
  //     res.json(items.serialize())
  //   }) 
  //   .catch( err => {
  //     console.log('error', err)
  //   })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
