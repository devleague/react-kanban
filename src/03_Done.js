import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';

class DONE extends Component {
    constructor(props) {
      super(props)
      this.state = {
          items: []
      }
    }
  
    render() {
      return this.props.items.filter(item => item.status_id === 3).map(
       item => <div key={item.id} className='done'><Tasks item={item} delete={this.props.deleteItemById}/></div>)
    }
  } 

  export default DONE;