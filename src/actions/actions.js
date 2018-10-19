// actions are only for mutating state

import initialItemsFromDB from "../db/database.db"

// import { getItemsFromDB, addItemsToDB } from '../db/database.db';

export const ADD_ITEM = 'ADD_ITEM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = () => {
    return {
        type: GET_ALL_ITEMS,
        payload: initialItemsFromDB
    }
}

export const addItem = (item) => {
    console.log('action: addItem', item)
    return {
        type: ADD_ITEM,
        payload: item
    }
} 

// export function addItem(item) {
//     return dispatch => {
//         addItemsToDB(item) 
//             .then(({ items }) => {
//                 dispatch({
//                     type: ADD_ITEM,
//                 items: items    
//             })
//         })
//     }
// }

// export function getAllItems() {
//     return dispatch => {
//         getItemsFromDB()
//             .then(items => {
//                 dispatch({
//                     type: GET_ALL_ITEMS,
//                     items: items    
//             })
//         })
//     }
// }




