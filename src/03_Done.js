import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

class DONE extends Component {
    constructor(props) {
      super(props)
      this.state = {
          items: []
      }
    }
  
    render() {
    console.log('done', this.props)
      return this.props.items.filter(item => item.status === 'Done').map(
       item => <div key={item.id} className='done'><Tasks item={item}/></div>)
    }
  } 

  export default DONE;