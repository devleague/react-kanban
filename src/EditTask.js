import React, { Component } from 'react';
import { deleteItemByIdFromFakeXHR } from './db/inventory.db';
import { format } from 'path';

class EditTask extends Component {
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

  componentWillReceiveProps(nextProps) {

  }

  deleteItemById(itemId) {
    console.log('BALETED')
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      this.updateStateFromDb()
    })
  }

  showUpdate() {
      this.setState({
        isHidden: !this.state.isHidden
      })
  }

  render() {
    console.log(this.isHidden);
    return (
      <div className='editForm'>
      <div className='editDelete'>
      <button className='editButton'>Edit</button>
      <button className='deleteButton'>Delete</button>
      </div>
      {this.state.isHidden && <form onSubmit={this.handleSubmit}>
        <label> Task Name:
          <input onChange={this.handleChange} name="name" type="text" required/>
        </label> 
        <label> Task Description:
          <input onChange={this.handleChange} name="description" type="text"/>
        </label>
        <label> Task Status:
          <select onChange={this.handleChange} name="status" required>
          <option value="" selected disabled hidden>Choose here</option>
            <option value="ToDo">Thing To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <input type="submit" onClick={this.handleSubmit} value="Submit"/>
        {this.state.isHidden && <button onClick={this.showUpdate.bind(this)}>Cancel</button>}
      </form>}
      </div>
    )
  }
}

export const showUpdate = () => {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

export default EditTask