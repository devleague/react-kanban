// import Cards from './models/cards';

let itemsFromFakeDB = [{
    id: 1,
    title: 'Eat Fud',
    body: 'CUZ IM HUNGRY',
    status: 'ToDo'
},
{
    id: 2,
    title: 'Chase Paper',
    body: 'CUZ IM POOR',
    status: 'Doing'
},
{
    id: 3,
    title: 'Kanak',
    body: 'CUZ IM TIRED',
    status: 'Done'
}]

let newId = 4;

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(itemsFromFakeDB.slice())
        // Cards
        // .fetchAll()
        // .then( cards => {
        //   let cardstuff = cards.serialize()
        //   resolve(cardstuff);        
        // })
    }, 500)
})

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
    setTimeout( () => {
        item.id = newId;
        newId++;
        console.log(item);
        itemsFromFakeDB.push(item);
        console.log('itemFromFakeDB', itemsFromFakeDB)
        resolve(itemsFromFakeDB)
    }, 500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
    setTimeout( () => {
      const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
      if (itemResponse) { 
        console.log('hi', itemResponse);
        resolve(itemResponse);}
      else reject({status: 404, message: 'item not found'})
    }, 500)
  })

  export const editItemByIdFromFakeXHR = (itemId, info) => new Promise( (resolve, reject) => {
    setTimeout( () => {
      const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
      if (itemResponse){
        itemsFromFakeDB.splice(itemsFromFakeDB.indexOf(itemResponse), 1, info)
        resolve(itemsFromFakeDB);
        console.log('edited', itemResponse);
      }
      else reject({status: 404, message: 'item not found'})
    }, 500)
  })
  
  export const deleteItemByIdFromFakeXHR = (itemId) => new Promise ( (resolve, reject) => {
    setTimeout( () => {
      const itemIdx = itemsFromFakeDB.findIndex( item => item.id === itemId);
      if (itemIdx === -1) {
        reject({status: 500, message: 'item not found'})
      } else {
        itemsFromFakeDB = itemsFromFakeDB.filter( item => {
          return item.id !== itemId
        })
        console.log('itemsFromFakeDB', itemsFromFakeDB)
        console.log('itemIdx', itemIdx)
        resolve({status: 'ok'})
      }
    })
  })