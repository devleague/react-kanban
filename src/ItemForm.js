import React, { Component } from 'react';
import { format } from 'path';

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
      type: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state)
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Task Name:
          <input onChange={this.handleChange} name="name" type="text"/>
        </label> 
        <label> Task Description:
          <input onChange={this.handleChange} name="description" type="text"/>
        </label>
        <label> Task Status:
          <select onChange={this.handleChange} name="type">
            <option value="todo">Things To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default ItemForm