// Create initial data to pull from
let initialItemsFromDB = [
    {
        id: 1,
        title: 'Make Better Styles',
        body: '[body description here]',
        priority: 'medium',
        status: 'in queue',
        create_by: 'Renee',
        assigned_to: 'Jon'
    },
    {
        id: 2,
        title: 'Make Even Better Styles', body: '[other body description here]',
        priority: 'low',
        status: 'in progress',
        created_by: 'Renee',
        assigned_to: 'Jon'
    },
    {
        id: 3,
        title: 'Styles Please',
        body: '[insert body here]',
        priority: 'high',
        status: 'done',
        created_by: 'Renee',
        assigned_to: 'Jon'
    }
];

let newId = 4


export const getItemsFromDB = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(initialItemsFromDB.slice())
    }, 500)
})

export const addItemsToDB = (item) => new Promise((resolve, reject) => {
    setTimeout(() => {
        item.id = newId; 
        newId++;
        initialItemsFromDB.push(item);
        console.log('initialItemsFromDB', initialItemsFromDB);
        resolve(initialItemsFromDB)
    }, 500)
})

export const getItemsByIdFromDB = (itemId) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const itemResponse = initialItemsFromDB.find(item => item.id === itemId);
        if (itemResponse) resolve(itemResponse);
        else reject({status: 404, message: 'item not found'})
    }, 500)
})


export const deleteItemByIdFromDB = (itemId) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const itemIndex = initialItemsFromDB.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            reject({status: 500, message: 'item not found'})
        } 
        else {
            initialItemsFromDB = initialItemsFromDB.filter(item => {
                return item.id !== itemId
            })
            console.log('Initial Items From DB', initialItemsFromDB)
            console.log('Item Index', itemIndex)
            resolve({status: 'ok'})
        }
    })
})