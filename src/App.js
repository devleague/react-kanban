import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';
import Logo from './giphy-4.gif'
import AddTask from './AddTask';
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

  getItemById(itemId) {
    getItemsFromFakeXHR(itemId)
    .then( result => {
      console.log('okay?', itemId)
      console.log('GOTTEN');
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
              <TODO getItemById={this.getItemById} deleteItemById={this.deleteItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DOING</h1>
              <DOING getItemById={this.getItemById} deleteItemById={this.deleteItemById} items={items}/>
            </div>
            <div className='taskCol'>
              <h1>DONE</h1>
              <DONE getItemById={this.getItemById} deleteItemById={this.deleteItemById} items={items}/>
            </div>
      </div>
      <br/>
    <AddTask addItem={this.addItem}/>
      </div>
    );
  }
}

// class TODO extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isHidden: true
//     }
//   }

//   showDescription() {
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }

//   render() {
//     return this.props.items.filter(item => item.status === 'ToDo').map( item => <div key={item.id} onClick={this.showDescription.bind(this)}>{item.name}{!this.state.isHidden && <div>{item.description}</div>}</div>)
//   }
// }  

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