import React, { Component } from 'react';
import './App.css';
import Select from 'react-select'
import axios from 'axios'

const options = [
  { value: 1, label: 'To Do'},
  { value: 2, label: 'In Progress'},
  { value: 3, label: 'Complete'}
]


class StatSelector extends Component {
  constructor(props) {
    super(props) 
    // this.addTask = this.addTask.bind(this)
  }

  state = {
    selectedOption: this.props.id.status_id
  }

  changeState = (selectedOption) => {
    this.setState( { selectedOption });
    axios.put('/card/:id')
    console.log('Option', this.props)
  }

  render() {
    console.log(this.props.card_id)
    const { selectedOption } = this.state;
    return (
      <Select
        value={ selectedOption }
        placeholder={ selectedOption }
        onChange={ this.changeState }
        options={ options }
        />
    );
  };
};

export default StatSelector;
