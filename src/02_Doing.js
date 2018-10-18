import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

class DOING extends Component {
    constructor(props) {
      super(props)
      this.state = {
          items: []
      }
    }
  
    render() {
    console.log('doing', this.props)
      return this.props.items.filter(item => item.status === 'Doing').map(
       item => <div key={item.id} className='doing'><Tasks item={item}/></div>)
    }
  }

  export default DOING;