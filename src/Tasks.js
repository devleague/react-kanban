import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
    this.updateStateFromDb = this.updateStateFromDb.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDb()
  }

  updateStateFromDb() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({items}, () => {
        console.log('this.state', this.state)
      })
    })
  }

  getItemById(itemId) {
    getItemsFromFakeXHR(itemId)
    .then( result => {
      console.log('okay?', itemId)
      console.log('GOTTEN');
    })
  }

  deleteItemById(itemId) {
    console.log('BALETED')
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      this.updateStateFromDb()
    })
  }

  render() {
    return this.state.items.map( item => <div className='task'>
        <div className='taskName'>{item.name}</div>
        <div className='taskDescription'>{item.description}</div>
        <div className='editDelete'>
            <button className='editButton'>Edit</button>
            <button className='deleteButton' >Delete</button>
        </div>
    </div>)
  }
}  

export default Tasks;