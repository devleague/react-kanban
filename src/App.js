import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';
import AddTask from './AddTask';
import TODO from './01_ToDo';
import DOING from './02_Doing';
import DONE from './03_Done';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.updateStateFromDb = this.updateStateFromDb.bind(this);
    this.deleteItemById = this.deleteItemById.bind(this);
  }

  //keep this
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
    })
  }

  editItemById(itemId) {
    editItemByIdFromFakeXHR(itemId)
    .then( result => {
      console.log('UPDATED');
    })
  }

  addItem(item) {
    addItemToFakeXHR(item)
    .then( items => {
      this.setState( {items })
      console.log('added', items);
    })
  }

  deleteItemById(itemId) {
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      console.log('deleted');
      this.updateStateFromDb()
    })
  }

  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
    console.log('enter hover');
  }

  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
    console.log('leave hover');
  }

  render() {
    const { items } = this.state
    return (
      <div id='kanban'>
      <div id='tasks'>
            <div className='taskCol'>
              <h1>THINGS TO DO</h1>
              <TODO items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DOING</h1>
              <DOING items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DONE</h1>
              <DONE items={items}/>
            </div>
        </div>
        <br/>
        <AddTask addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;