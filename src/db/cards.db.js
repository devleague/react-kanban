let status = ['inqueue', 'inprogress', 'done'];
let priority = ['Low', 'Medium', 'High'];
let cardsFromFakeDB = [{
    id: 1,
    title: 'Make Better Styles',
    priorityId: priority[1],
    assigned_by: 'Tom',
    user: 'Abby',
    statusId: status[0]
},
{
    id: 2,
    title: 'Frame work',
    priorityId: priority[2],
    assigned_by: 'Tom',
    user: 'Abby',
    statusId: status[1]
},
{
    id: 3,
    title: 'Backend database structure',
    priorityId: priority[0],
    assigned_by: 'Tom',
    user: 'Abby',
    statusId: status[0]
},
{
    id: 4,
    title: 'Link to express server',
    priorityId: priority[0],
    assigned_by: 'Tom',
    user: 'Abby',
    statusId: status[2]
},
{
    id: 5,
    title: 'Communicate with client about app features',
    priorityId: priority[2],
    assigned_by: 'Nick',
    user: 'Abby',
    statusId: status[0]
},
]

export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cardsFromFakeDB.slice())
    }, 500)
})

export const addCardsToFakeXHR = (card) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // card.id = newId;
        // newId++;
        cardsFromFakeDB.push(card);
        console.log('fake card data....', cardsFromFakeDB)
        resolve(cardsFromFakeDB)
    }, 500)
})

// export const deleteItemByIdFromFakeXHR = (itemId) => new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//       const itemIdx = itemsFromFakeDB.findIndex( item => item.id === itemId);
//       if (itemIdx === -1) {
//         reject({status: 500, message: 'item not found'})
//       } else {
//         itemsFromFakeDB = itemsFromFakeDB.filter( item => {
//           return item.id !== itemId
//         })
//         console.log('itemsFromFakeDB', itemsFromFakeDB)
//         console.log('itemIdx', itemIdx)
//         resolve({status: 'ok'})
//       }
//     })
//   })