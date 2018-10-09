import React, { Component } from 'react';
import logo from './giphy-4.gif';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';
import ItemForm from './ItemForm';
const ReactDOM = require('react-dom');


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

  render() {
    const { items } = this.state
    return (
     <div id='kanban'>
      <div id='tasks'>
            <div className='taskCol'>
              <h1>THINGS TO DO</h1>
              <TODO deleteItemById={this.deleteItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DOING</h1>
              <DOING deleteItemById={this.deleteItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DUN</h1>
              <DONE deleteItemById={this.deleteItemById} items={items}/>
            </div>
            
      </div>
      <button></button>
      <div id='form' style={{display:'none'}}><ItemForm addItem={this.addItem}/></div>
      </div>
    );
  }
}

function TODO(props) {
  return props.items.filter(item => item.type === 'Thing To Do').map( item => <div key={item.id} onClick={ () => props.deleteItemById(item.id)}>{item.name}</div>)
}

function DOING(props) {
  return props.items.filter(item => item.type === 'Doing').map( item => <div key={item.id} onClick={ () => props.deleteItemById(item.id)}>{item.name}</div>)
}

function DONE(props) {
  return props.items.filter(item => item.type === 'Dun').map( item => <div key={item.id} onClick={ () => props.deleteItemById(item.id)}>{item.name}</div>)
}


export default App;





//for class App
 // <div className="App">
      //   <header className="App-header">
      //     <a href='https://www.youtube.com/watch?v=Hm8oqlg8z4s' target='_blank'><img src={logo} className="App-logo" alt="logo" /></a>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://s3-us-west-2.amazonaws.com/lingscalc/index.html"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       FREE MONEY CLICK HERE
      //     </a>  
      //   </header>
      // </div>