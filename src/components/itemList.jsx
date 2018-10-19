import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carditems: [],  
      card_id: this.props.card_id,
      title: this.props.title,
      body: this.props.body,
      priority_id: this.props.priority_id,
      status_id: this.props.status_id,
      created_by: this.props.created_by,
      assigned_to: this.props.assigned_to
    }
  }

  render() {
    return (
      <div>
        {this.props.card_id} <br />
        {this.props.title} <br />
        {this.props.body} <br />
        {this.props.priority_id} <br />
        {this.props.status_id} <br />
        {this.props.created_by} <br />
        {this.props.assigned_to} <br />
        
      </div>
    )
  }
}


export default Item