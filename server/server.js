const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get("/api/cards", (req, res) => {
  
})
