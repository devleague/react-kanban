const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/cups', (req, res) => {
  res.json([
    {
      color : "red"
    },
    {
      color : "blue"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});