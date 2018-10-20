import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Header from './Header'
import StatusColumns from './StatusColumns'
import NewTask from './NewTask'




class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      cards:[],
      users:[]
    }
  
  }

  componentDidMount(){ 
    Promise.all([axios.get('/cards'), axios.get('/users')]) 
    .then(response => {
      const [cards, users] = response
      this.setState(  { 
          cards: cards.data,
          users: users.data
      })
    })
    .catch( err => {
      console.log('error', err)
    })
  }

  renderAddNew () {
    var x = document.getElementById('newform');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }


  addItemToInventory = (card) => {
    let arr = this.state.cards;
    arr.push(card)
    this.setState( state => {
      return { cards: arr}
    })
    axios.post('/cards', card ) 
    .then( response => {
      console.log(response)
    })
    .catch( err => {
      console.log('Err', err)
    })

    console.log('additemtoinventory', this.state)
  }

  delete = (card) => {
    console.log('delete', card.title)
    let arr = this.state.cards
    let id = card.card_id
    let removeIndex = arr.map(function(card) { return card.card_id; }).indexOf(id);
    arr.splice(removeIndex, 1)
    this.setState ( state => {
      return {cards: arr}
    })
    axios.delete('/cards', { data: { card }})
    .then( response => {
      console.log('del cards res', response)
    })
    .catch( err => {
      console.log('Err', err)
    })
    console.log('delete end', this.state)

  }

  render() {
    return (
      <div className="app">
        <NewTask toggle={this.renderAddNew} addItem={this.addItemToInventory} users={this.state.users} />
        <Header toggle={this.renderAddNew} cards={this.state.cards} />
        <StatusColumns delete={this.delete} cards={this.state.cards}  />
      </div>
    );
  }
}

export default App;