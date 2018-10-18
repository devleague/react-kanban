import React, { Component } from 'react';
import './App.css';
import './container/Container.css'

import { getAllItems } from './actions/actions.js'

import initialItemsFromDB, { getItemsFromDB, addItemsToDB, deleteItemByIdFromDB } from './db/database.db';

// import initialItemsFromDB from './db/database.db'
import Form from './form/Form';

import Container from './container/Container';
// import InQueue from './queue/Queue';
// import Progress from './progress/Progress';
// import Done from './done/Done';   

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount = () => {
    this.props.getAllItems()
  }

  // updateStateFromDB = () => {
  //   getItemsFromDB()
  //     .then(items => {
  //       this.setState({ items }, () => {
  //         console.log('this.state', this.state)
  //       })
  //   })
  // }

  // addItem =(item) => {
  //   addItemsToDB(item)
  //     .then(items => {
  //     this.setState({items})
  //   })
  // }

  // deleteItemBId = (itemId) => {
  //   console.log('Deleted')
  //   deleteItemByIdFromDB(itemId)
  //     .then(result => {
  //     this.updateStateFromDB()
  //   })
  // }


  render() {
    
    // const { items } = this.state

    return (
      // <div className="App">
      <header>
        <div className="App-header">  
          <h1 className="App-title">       Kanban
          </h1>  
          <button type="button">
            + New Task
          </button>
      </div>    
      <div className="App">
          {/* <div className="Queue-container">
            <div className="Queue-title">  
          Queue    
          </div> */}
            {/* <InQueue items = {items} /> */}
            <Container/>
        {/* </div>
          <div className="Progress-container">
            <div className="Progress-title"> 
              <Container/>
             </div>    
        </div>
          <div className="Done-container">
            <div className="Done-title">  
             Done
            </div>  
        </div> */}
        <Form />
        </div>
      </header>  
    )
  }
}

// function ItemList(props) {
//   return props.items.map(item => <Item title={item.title}/>)
// }

// function Item(props) {
//   return <div>{props.title}</div>
// }
const mapStateToProps = storeState => ({ items: storeState })

const ConnectedApp = connect(mapStateToProps, { getAllItems })(App);

export default App;
