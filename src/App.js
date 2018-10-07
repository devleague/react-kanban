import React, { Component } from 'react';
import logo from './giphy-4.gif';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';
import ItemForm from './ItemForm';

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
  render() {
    return (
     
      <div id='tasks'>
            <div class='taskCol'>
              <h1>THINGS TO DO</h1>
            </div>
            <div class='taskCol'>
              <h1>DOING</h1>
            </div>
            <div class='taskCol'>
              <h1>DUN</h1>
            </div>
      </div>
    );
  }
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