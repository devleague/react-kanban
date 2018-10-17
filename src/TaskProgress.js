import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

class TODO extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return this.props.items.filter(item => item.status === 'ToDo').map( item => /*<div key={item.id}>{item.name}{!this.state.isHidden && <div>{item.description}</div>}</div>*/<Tasks/>)
  }
}  

export default TODO;