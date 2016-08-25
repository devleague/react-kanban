import React from 'react';

const Card = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.id);
  },
  render: function() {
    return (
      <div className="Card">
          Ticket ID #
          {this.props.id}
          <br />
          {this.props.Title}
          <br />
          {this.props.Priority}
          <br />
          {this.props.Status}
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value=" X "/>
          </form>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value=" Edit "/>
          </form>
      </div>
    );
  }
});

export default Card;
