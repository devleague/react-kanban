import React from 'react';

class KanbanItem extends React.Component{
  render() {
    return (
      <div>
        <h4>{this.props.Title}</h4>
        <p>{this.props.Priority}</p>
        <p>{this.props.Status}</p>
        <p>{this.props.Createdby}</p>
        <p>{this.props.Assignedto}</p>
      </div>
    )
  }
}

export default KanbanItem;