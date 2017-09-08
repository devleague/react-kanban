const router = require('express').Router();
const api = require('./data.js');

router.route('/cards')
.get((req, res) => {
  api.getFakeDbReq()
  .then(cards => {
    res.json(cards);
  })
})
.post((req, res) => {
  let { card } = req.body;
  api.addToFakeDb(card)
  .then(newCard => {
    console.log("----------------------")
    console.log(newCard)
    api.getFakeDbReq().then(cards => {
      console.log("ALTERED DB")
      console.log(cards);
    })
    res.json(newCard);
  })
});

module.exports = router;