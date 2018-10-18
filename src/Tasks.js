import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

function deleteItemById(itemId) {
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      console.log('deleted');
      this.updateStateFromDb()
    })
}

export const Tasks = props => {
    return (<div className='task'>
    <div className='taskName'>{props.item.name}</div>
        <div className='taskDescription'>{props.item.description}</div>
        <div className='editDelete'>
            <button className='editButton'>Edit</button>
            <button className='deleteButton' onClick={this.deleteItemById(props.item.id)}>Delete</button>
        </div>
    </div>)
} 

export default Tasks;