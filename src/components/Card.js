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
            Ticket ID #
            {this.props.id}
            <input type="submit" value=" X "/>
            <br />
            {this.props.Title}
            <br />
            {this.props.Priority}
            <br />
            {this.props.Status}
            <input type="submit" value=" Edit "/>
          </form>
      </div>
    );
  }
});

export default Card;
