const fakeDb= [
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
      "_id": 3,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "high",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 4,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "blocker",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 5,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "medium",
      "status": "in-progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 6,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ];

let nextId = 7;

export const getFakeDbReq = () => new Promise((resolve) => {
  setTimeout(() => resolve(fakeDb), 2000);
});

export const addToFakeDb = newCard => new Promise(resolve => {
  nextId++;
  newCard._id = nextId;
  fakeDb.push(newCard);

  setTimeout(() => resolve(newCard), 2000);
});
