const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/test', (req, res)=> {
  res.json({
  "in-queue": [
    {
      "_id": 1,
      "title": "Make Better Styles",
      "priority": "medium",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 2,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "low",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 4,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "high",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 22,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "blocker",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ],
  "in-progress": [
    {
      "_id": 7,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "medium",
      "status": "in-progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ],
  "done": [
    {
      "_id": 25,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ]
})
})

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})