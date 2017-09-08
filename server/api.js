const router = require('express').Router();
const api = require('./fakeDb.js');

router
  .route('/cards')
  .get((req, res) => {
    api.getFakeDbReq().then(cards => {
      res.json({
        status: 'success',
        data: cards
      });
    });
  })
  .post((req, res) => {
    let { card } = req.body;
    api.addToFakeDb(card).then(newCard => {
      api.getFakeDbReq().then(cards => {});
      res.json({
        status: 'success',
        data: newCard
      });
    });
  });

router
  .route('/cards/:id')
  .delete((req, res) => {
    api
      .delFromFakeDb(req.params.id)
      .then(card => {
        res.json({
          status: 'success',
          data: null
        });
      })
      .catch(err => {
        res.json({
          status: 'fail',
          message: err
        });
      });
  })
  .patch((req, res) => {
    api
      .updateFromFakeDb(req.params.id, req.body)
      .then(card => {
        res.json({
          status: 'success',
          data: card
        });
      })
      .catch(err => {
        res.json({
          status: 'fail',
          message: err
        });
      });
  });

module.exports = router;
