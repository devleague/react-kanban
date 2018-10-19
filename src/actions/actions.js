import { getItemsFromFakeXHR, addItemToFakeXHR, editItemByIdFromFakeXHR } from '../server/db/inventory.db'
import axios from 'axios';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addItem() {
    return dispatch => {
        axios.post('http://localhost:8989/add')
        .then( item => {
            dispatch({
                type: ADD_ITEM,
                task: item.data 
            })
        })
        .catch( err => {
            console.log('action err', err);
        });
        dispatch({
            type: ADD_ITEM,
            task: []
        })
    }
}

export function getAllItems() {
    return dispatch => {
        axios.get('http://localhost:8989/')
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