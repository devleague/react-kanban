const fakeDb = [];

let nextId = 0;

module.exports.getFakeDbReq = () =>
  new Promise(resolve => {
    resolve(fakeDb);
  });

module.exports.addToFakeDb = newCard =>
  new Promise(resolve => {
    nextId++;
    newCard._id = nextId;
    fakeDb.push(newCard);

    resolve(newCard);
  });

module.exports.delFromFakeDb = id =>
  new Promise((resolve, reject) => {
    let i = fakeDb.findIndex(card => card._id == id);
    if (i >= 0) {
      fakeDb.splice(i, 1);
      resolve();
    } else {
      reject('Card does not exist');
    }
  });

module.exports.updateFromFakeDb = (id, fields) =>
  new Promise((resolve, reject) => {
    let i = fakeDb.findIndex(card => card._id == id);
    if (i >= 0) {
      fakeDb[i] = Object.assign({}, fakeDb[i], fields);
      resolve(fakeDb[i]);
    } else {
      reject('Could not update card.');
    }
  });
