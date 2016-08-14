const express = require('express');
const path = require('path');

const app = express();



app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log(`Server listen on port ${app.get('port')}`);
})