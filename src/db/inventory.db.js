let itemsFromFakeDB = [{
    id: 1,
    name: 'Eat Fud',
    description: 'CUZ IM HUNGRY',
    status: 'ToDo'
},
{
    id: 2,
    name: 'Chase Paper',
    description: 'CUZ IM POOR',
    status: 'Doing'
},
{
    id: 3,
    name: 'Kanak',
    description: 'CUZ IM TIRED',
    status: 'Done'
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
        console.log(item);
        itemsFromFakeDB.push(item);
        console.log('itemFromFakeDB', itemsFromFakeDB)
        resolve(itemsFromFakeDB)
    }, 500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
    setTimeout( () => {
      const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
      if (itemResponse) { console.log('hi', itemResponse);resolve(itemResponse);}
      else reject({status: 404, message: 'item not found'})
    }, 500)
  })

  export const editItemByIdFromFakeXHR = (itemId, info) => new Promise( (resolve, reject) => {
    setTimeout( () => {
      const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
      if (itemResponse){
        console.log('hello', itemResponse);
        itemsFromFakeDB.splice(itemsFromFakeDB.indexOf(itemResponse), 1, info)
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