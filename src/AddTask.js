import React, { Component } from 'react';
import { format } from 'path';
import Logo from './giphy-4.gif';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './server/db/inventory.db';

class AddTask extends Component {
  isHidden = true;
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      description: null,
      status: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.toggleHidden()
  }

  handleChange(e) {
    const target = e.target
    const value = target.value;
    const name = target.name;
    console.log('value', value)
    console.log('name', name)
    this.setState( {
      [name] : value
    }, () => {
      console.log('state', this.state)
    })
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div id='addForm'>
       {!this.state.isHidden && <button onClick={this.toggleHidden.bind(this)}>Add New Task</button>}
      {this.state.isHidden && <form onSubmit={this.handleSubmit}>
        <label> Task Name:
          <input onChange={this.handleChange} name="name" type="text"/>
        </label> 
        <label> Task Description:
          <input onChange={this.handleChange} name="description" type="text"/>
        </label>
        <label> Task Status:
          <select onChange={this.handleChange} name="status">
          <option value="" selected disabled hidden>Choose here</option>
            <option value="ToDo">Thing To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <input type="submit" onClick={this.handleSubmit} value="Submit"/>
        {this.state.isHidden && <button onClick={this.toggleHidden.bind(this)}>Cancel</button>}
      </form>}
      <br/><br/>
      {this.state.isHidden && <img src={Logo}/>}
      </div>
    )
  }
}

export default AddTask;