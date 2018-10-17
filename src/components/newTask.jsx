import React, { Component } from 'react';
import axios from 'axios';

class ItemForm extends Component {
    constructor(props) {
      super(props)
      this.state ={
        title: null,
        body: null,
        priority_id: null,
        status_id: null,
        first_name: null,
        last_name: null,
        email: null
      }
    }
  
    addItemTask = (getNewTask) => {
        console.log("AXIOS ADD NEW TASK FORM", getNewTask);
        axios
        .post('/newtask', getNewTask)
            .then(newStateData => {
              console.log("\nserverData.data:", newStateData.data);
              this.setState({ carditems: newStateData.data })
              this.setState({ usernames: newStateData.data })
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
          </label> <br />

          <label> Description:
            <input onChange={this.handleChange} type="text" name="body"/>
          </label> <br />
          <label> Priority:
            <select onChange={this.handleChange} name="priority_id">
              <option value="111">Low</option>
              <option value="555">Medium</option>
              <option value="999">High</option>
            </select>
          </label> <br />
          <label> Status:
            <select onChange={this.handleChange} name="status_id">
              <option value="10">Queue</option>
              <option value="50">In Progress</option>
              <option value="90">Done</option>
            </select>
          </label> <br />
          <label> By:
            <input onChange={this.handleChange} type="text" name="first_name"/>
            <input onChange={this.handleChange} type="text" name="last_name"/>
            <input onChange={this.handleChange} type="text" name="email"/>
          </label> <br />
          <label> To:
            <input onChange={this.handleChange} type="text" name="first_name"/>
            <input onChange={this.handleChange} type="text" name="last_name"/>
            <input onChange={this.handleChange} type="text" name="email"/>
          </label> <br />
  
          <input type="submit"/>
        </form>
      )
    }
  
  }
  
export default ItemForm;  