const fakeDb = [];

let nextId = 0;

module.exports.getFakeDbReq = () => new Promise((resolve) => {
  resolve(fakeDb);
});

module.exports.addToFakeDb = newCard => new Promise(resolve => {
  nextId++;
  newCard._id = nextId;
  fakeDb.push(newCard);

  resolve(newCard)
});

module.exports.delFromFakeDb = id => new Promise(resolve => {
  let i = fakeDb.findIndex(card => card._id == id)
  fakeDb.splice(i, 1);

  resolve(id);
});

module.exports.moveFromFakeDb = (id, status) => new Promise(resolve => {
  let i = fakeDb.findIndex(card => card._id == id);
  fakeDb[i].status = status;

  resolve(fakeDb[i]);
})

module.exports.editFromFakeDb = () => {

}
