import React, { Component } from 'react';
import './App.css';

import { getItemsFromDB, addItemsToDB, deleteItemByIdFromDB } from './db/database.db';
import Form from './form/Form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this); 
    this.updateStateFromDB = this.updateStateFromDB.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDB()
  }

  updateStateFromDB() {
    getItemsFromDB()
      .then(items => {
        this.setState({ items }, () => {
          console.log('this.state', this.state)
        })
    })
  }

  addItem(item) {
    addItemsToDB(item)
      .then(items => {
      this.setState({items})
    })
  }

  deleteItemBId(itemId) {
    console.log('Deleted')
    deleteItemByIdFromDB(itemId)
      .then(result => {
      this.updateStateFromDB()
    })
  }


  render() {
    
    const { items } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Things Here:</h1>  
          <ItemList deleteItemById={this.deleteItemById} items={items}/>
        {/* <Form addItem={this.addItem}/> */}  
        </header>
      </div>
    );
  }
}

function ItemList(props) {
  return props.items.map(item => <div onCLick={() => props.deleteItemBId(item.id)}>{item.title} {item.body} {item.status} {item.priority}</div>)
}


export default App;
