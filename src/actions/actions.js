import { getItemsFromFakeXHR, addItemToFakeXHR, editItemByIdFromFakeXHR } from '../server/db/inventory.db'
import axios from 'axios';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addItem(item) {
    return dispatch => {
        addItemToFakeXHR(item)
        .then( (item) => {
            dispatch({
                type: ADD_ITEM,
                task: item 
            })
        })
    }
}

export function getAllItems() {
    return dispatch => {
        // getItemsFromFakeXHR()
        // .then( items => {
        //     dispatch({
        //         type: GET_ALL_ITEMS,
        //         task: items
        //     })
        // })
        axios.get('http://localhost:8989/cards')
        .then(items => {
            dispatch({ 
                type: GET_ALL_ITEMS,
                task: items.data
            })
        })
        .catch( err => {
            console.log('action err', err);
            dispatch({ 
                type: GET_ALL_ITEMS,
                task: []
            })
        })
    }
}

export function editItem(item) {
    return dispatch => {
        editItemByIdFromFakeXHR(item.id, item)
        .then( item => {
            dispatch({
                type: EDIT_ITEM,
                task: item
            })
        })
    }
}