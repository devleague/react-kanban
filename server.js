const app = require('./app');
const server = app.listen(8080, () => {
  console.log('Listening on port ${server.address().port}');
});

module.exports = server;