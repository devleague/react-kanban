import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';

class TODO extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
  }

  render() {
    console.log("HI", this.props)
    return this.props.items.filter(item => item.status === 'ToDo').map(
     item => <div key={item.id} className='toDo'><Tasks delete={this.props.deleteItemById} updateDB={this.props.updateDB} item={item}/></div>)
  }
}   

export default TODO;