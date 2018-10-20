import React, { Component } from 'react';
import './App.css';


class NewTask extends Component {
  constructor(props) {
    super(props) 
    // this.renderAddNew = this.renderAddNew.bind(this)
    this.state = {
        title: null,
        body: null,
        priority_id: null,
        status_id: null,
        assigned_to: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  render() { 
      return (
          < div className='newform' id='newform'>
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input onChange={this.handleChange} type='text' name='title' required />
                </label>
                <label>Body
                  <textarea onChange={this.handleChange} type='text' name='body' required />    
                </label>
                <label>Priority
                    <select onChange={this.handleChange} name='priority_id' required >
                      <option disabled defaultValue=''> Select</option>
                      <option value='1'>High</option>
                      <option value='2'>Medium</option>
                      <option value='3'>Low</option>
                    </select>
                </label>
                <label>Status
                  <select onChange={this.handleChange} name='status_id' required>
                    <option disabled defaultValue=''> Select</option>
                      <option value='1'>To Do</option>
                      <option value='2'>In Progress</option>
                      <option value='3'>Complete</option>
                    </select>
                </label>
                <label>Owner
                <select onChange={this.handleChange} name='assigned_to' required> 
                      <option disabled defaultValue=''> Select</option>
                      <option value='1'>Sammi</option>
                      <option value='2'>David</option>
                      <option value='3'>Ryan</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={this.props.toggle}>Close</button>
          </div>
      )

  };
};

export default NewTask;
