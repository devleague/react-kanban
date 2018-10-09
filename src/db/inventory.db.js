let itemsFromFakeDB = [{
    id: 1,
    name: 'Eat Fud',
    type: 'Thing To Do'
},
{
    id: 2,
    name: 'Chase Paper',
    type: 'Doing'
},
{
    id: 3,
    name: 'Kanak',
    type: 'Dun'
}]

let newId = 4;

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(itemsFromFakeDB.slice())
    }, 500)
})

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
    setTimeout( () => {
        item.id = newId;
        newId++;
        itemsFromFakeDB.push(item);
        console.log('itemFromFakeDB', itemsFromFakeDB)
        resolve(itemsFromFakeDB)
    }, 500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
    setTimeout( () => {
      const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
      if (itemResponse) resolve(itemResponse);
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