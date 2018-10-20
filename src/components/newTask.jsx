import React, { Component } from 'react';
import axios from 'axios';
import { DropDownList } from '@progress/kendo-react-dropdowns';

class ItemForm extends Component {
  constructor(props) {
  super(props)
  this.state ={
    carditems: [],
    title: null,
    body: null,
    priority_id: null,
    status_id: 10,
    created_by: [],
    assigned_to: []
  }
  // this.handleChange = this.handleChange.bind(this)
}

addItemTask = (getNewTask) => {
    console.log("AXIOS ADD NEW TASK FORM", getNewTask);
    axios
    .post('/newtask', getNewTask)
        .then(newStateData => {
          console.log("\nserverData.data:", newStateData.data);
          this.setState({ carditems: newStateData.data })
        })
        .catch(err => {
          console.log("ERROR", err);
        })  
}

handleSubmit = (e) => {
  e.preventDefault()
  console.log('SUBMITTED!!!!', this.state)
  this.props.addItemTask(this.state)
}

handleChange = (e) => {
    e.preventDefault();
    console.log(e)
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label> Title:
        <input onChange={this.handleChange} type="text" name="title"/>
      </label>

      <label> Description:
        <input onChange={this.handleChange} type="text" name="body"/>
      </label>
      <label> Priority:
        <select onChange={this.handleChange} name="priority_id">
          {/* Must have a default option with a blank value and blank option text, */}
          <option value=""></option>
          {/* if there's no blank option, the first option with a value*/}
          {/* in the dropdown menu will always return null and throw an error */}
          <option value={111}>Low</option>
          <option value={555}>Medium</option>
          <option value={999}>High</option>
        </select>
      </label>
      <label> Created By:
        <input onChange={this.handleChange} type="text" name="created_by"/>
        {/* <DropDownList data={this.created_by} /> */}
      </label>
      <label> Assigned To:
        <input onChange={this.handleChange} type="text" name="assigned_to"/>
        {/* <DropDownList data={this.created_by} /> */}
      </label>

      <input type="submit"/>
    </form>
  )
}
}
  
export default ItemForm;  