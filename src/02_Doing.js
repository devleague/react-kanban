import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';

class DOING extends Component {
    constructor(props) {
      super(props)
      this.state = {
          items: []
      }
    }
  
    render() {
      return this.props.items.filter(item => item.status === 'Doing').map(
       item => <div key={item.id} className='doing'><Tasks delete={this.props.deleteItemById} item={item}/></div>)
    }
  }

  export default DOING;