import React, { Component } from 'react';
import { deleteItemByIdFromFakeXHR, getItemsFromFakeXHR } from './server/db/inventory.db';
import EditTask from './EditTask';
import { connect } from 'react-redux';

class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
          editing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
      }

      toggleEdit() {
          if (this.state.editing === false) {
              this.setState({editing: true})
          } else {
              this.setState({editing: false})
          }
      }


      render() {
        console.log('show', this.props)
        return (<div className='task'>
        <div className='taskName'>{this.props.item.title}</div>
            <div className='taskDescription'>{this.props.item.body}</div>
            {!this.state.editing ? <div className='editDelete'>
                <button className='editButton' onClick={this.toggleEdit}>Edit</button>
                <button className='deleteButton' onClick={() => this.props.delete(this.props.item.id)}>Delete</button>
            </div> : null} 
            {this.state.editing ? <EditTask toggleEdit={this.toggleEdit} task={this.props.item} editing={this.state.editing}/> : null}
        </div>)
      }
} 

export default Tasks;