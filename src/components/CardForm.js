import React from 'react';

const CardForm = React.createClass({
  getInitialState: function() {
    return {
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    };
  },
  handleTitleChange: function(e) {
    this.setState({
      Title: e.target.value
    });
  },
  handlePriorityChange: function(e) {
    this.setState({
      Priority: e.target.value
    });
  },
  handleStatusChange: function(e) {
    this.setState({
      Status: e.target.value
    });
  },
  handleCreatedByChange: function(e) {
    this.setState({
      CreatedBy: e.target.value
    });
  },
  handleAssignedToChange: function(e) {
    this.setState({
      AssignedTo: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var Title = this.state.Title.trim();
    var Priority = this.state.Priority.trim();
    var Status = this.state.Status.trim();
    var CreatedBy = this.state.CreatedBy.trim();
    var AssignedTo = this.state.AssignedTo.trim();
    if (!Title) {
      Title= "New Task";
    }
    if (!Priority) {
      Priority = 1;
    }
    if (!Status) {
      Status = "Queue";
    }
    if (!CreatedBy) {
      CreatedBy = " ";
    }
    if (!AssignedTo) {
      AssignedTo = " ";
    }
    this.props.onCardSubmit({
      Title: Title,
      Priority: Priority,
      Status: Status,
      CreatedBy: CreatedBy,
      AssignedTo: AssignedTo
    });
    this.setState({
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    });
  },
  handleDelete: function(e) {
    this.props.onDeleteCard({
      Title: Title,
      Priority: Priority,
      Status: Status,
      CreatedBy: CreatedBy,
      AssignedTo: AssignedTo
    });
    this.setState({
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    });
  },
  handleEdit: function(e) {
    this.props.onEditCard({
      Title: Title,
      Priority: Priority,
      Status: Status,
      CreatedBy: CreatedBy,
      AssignedTo: AssignedTo
    });
    this.setState({
      Title: '',
      Priority: '',
      Status: '',
      CreatedBy: '',
      AssignedTo: ''
    });
  },
  render: function() {
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <div className="Header">Create New Task!</div>
        <div className="input">
          Title <input
            type="text"
            value={this.state.Title}
            onChange={this.handleTitleChange}
          />
          Priority Level: {this.state.Priority} (Drag Me!) <input
            type="range"
            min="0"
            max="10"
            name="Priority"
            value={this.state.Priority}
            onChange={this.handlePriorityChange}
          />
          <div>
            Queue <input
              type="radio"
              name="status"
              value="Queue"
              onChange={this.handleStatusChange}
            />
            Progress <input
              type="radio"
              name="status"
              value="Progress"
              onChange={this.handleStatusChange}
            />
            Done <input
              type="radio"
              name="status"
              value="Done"
              onChange={this.handleStatusChange}
            />
          </div>
            Created By<input
              type="text"
              value={this.state.CreatedBy}
              onChange={this.handleCreatedByChange}
            />
          Assigned To<input
            type="text"
            value={this.state.AssignedTo}
            onChange={this.handleAssignedToChange}
          />
          <input type="submit" value="Post" />
        </div>
      </form>
    );
  }
});

export default CardForm;