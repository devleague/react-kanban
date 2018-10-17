import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR, editItemByIdFromFakeXHR } from './server/db/inventory.db';
import AddTask from './AddTask';
// import EditTask from './EditTask';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';
// import { getAllItems } from './actions/actions.js'
// import { ADD_ITEM, GET_ALL_ITEMS } from './server/actions/actions';


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
      console.log('okay?', itemId)
      console.log('GOTTEN');
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
    })
  }

  deleteItemById(itemId) {
    console.log('BALETED')
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
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
              <TODO getItemById={this.getItemById} deleteItemById={this.deleteItemById} editItemById={this.editItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DOING</h1>
              <DOING getItemById={this.getItemById} deleteItemById={this.deleteItemById} editItemById={this.editItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DONE</h1>
              <DONE getItemById={this.getItemById} deleteItemById={this.deleteItemById} editItemById={this.editItemById} items={items}/>
            </div>
        </div>
        <br/>
        <AddTask addItem={this.addItem}/>
      </div>
    );
  }
}

function TODO(props) {
  return props.items.filter(item => item.status === 'ToDo').map( item => <div className='toDo'>
    <div className='taskDetails'>
      <div className='taskName' key={item.id} onClick={ () => props.getItemById(item.id)}>
        {item.name}
      </div>
      <div className='taskDescription'>{item.description}</div>
    </div>
    <div className='editDelete'>
    <button className='editButton'>Edit</button>
    <button className='deleteButton' onClick={() => props.deleteItemById(item.id)}>Delete</button>
  </div>
  </div>)
}

function DOING(props) {
  return props.items.filter(item => item.status === 'Doing').map( item => <div className='doing'>
  <div className='taskDetails'>
    <div className='taskName' key={item.id} onClick={ () => props.getItemById(item.id)}>
      {item.name}
    </div>
    <div className='taskDescription'>{item.description}</div>
  </div>
  <div className='editDelete'>
    <button className='editButton'>Edit</button>
    <button className='deleteButton' onClick={() => props.deleteItemById(item.id)}>Delete</button>
  </div>
</div>)
}

function DONE(props) {
  return props.items.filter(item => item.status === 'Done').map( item => <div className='done'>
  <div className='taskDetails'>
    <div className='taskName' key={item.id}>
      {item.name}
    </div>
    <div className='taskDescription'>{item.description}</div>
  </div>
  <div className='editDelete'>
    <button className='editButton'>Edit</button>
    <button className='deleteButton' onClick={() => props.deleteItemById(item.id)}>Delete</button>
  </div>
</div>)
}

// export default connect()(App);
export default App;