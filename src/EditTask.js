import React, { Component } from 'react';
import { editItem } from './actions/actions';
import { connect } from 'react-redux';

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

  componentDidMount() {
    this.setState({
      id: this.props.task.id, 
      name: this.props.task.name, 
      description: this.props.task.description, 
      status: this.props.task.status
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editItem(this.state);
    this.props.toggleEdit();
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
    console.log('wya', this.props);
    return (
      <div className='editForm'>
      <div className='editDelete'>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label> Task Name:
          <input onChange={this.handleChange} name="name" type="text" defaultValue={this.props.task.title}/>
        </label> 
        <label> Task Description:
          <input onChange={this.handleChange} name="description" defaultValue={this.props.task.body} type="text"/>
        </label>
        <label> Task Status:
          <select onChange={this.handleChange} name="status" defaultValue={this.props.task.status}>
          <option value="" selected disabled hidden>Choose here</option>
            <option value="ToDo">Thing To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <input type="submit" onClick={this.handleSubmit} value="Submit"/>
        <button onClick={this.props.toggleEdit}>Cancel</button>
      </form>
      </div>
    )
  }
}

export const showUpdate = () => {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

export default connect(null, { editItem })(EditTask)
