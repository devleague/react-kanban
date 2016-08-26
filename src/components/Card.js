import React from 'react';

const Card = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.id);
  },
  render: function() {
    return (
      <div className="Card">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value=" Edit " className="Edit"/>
            <input type="submit" value=" X " className="Delete"/><br/><br/>
            Ticket ID #
            {this.props.id}
            <br />
            {this.props.Title}
            <br />
            {this.props.Priority}
            <br />
            {this.props.Status}
          </form>
      </div>
    );
  }
});

export default Card;
