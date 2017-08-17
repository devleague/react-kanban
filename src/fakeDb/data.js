const initialState = [
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
    },
    {
      "_id": 7,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "medium",
      "status": "in-progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 25,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ];

export const getFakeDbReq = () => new Promise((resolve) => {
  setTimeout(() => resolve(initialState), 2000);
});

export const addToFakeDb = () => new Promise(resolve => {
  setTimeout(() => resolve(), 2000);
});
