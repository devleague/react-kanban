import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

class TODO extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
  }

  render() {
    return this.props.items.filter(item => item.status === 'ToDo').map(
     item => <div key={item.id} className='toDo'><Tasks item={item}/></div>)
  }
}   

export default TODO;