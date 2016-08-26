import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDelete (e) {
    e.preventDefault();
    console.log(this.props);
    this.props.handleDelete(this.props.id);
  }
  handleEdit (e) {
    e.preventDefault();
    this.props.handleEdit(this.props.id);
  }
  render () {
    return (
      <div className="Card">
          <form onSubmit={this.handleEdit}>
            <input type="submit" value=" Edit " className="Edit"/>
          </form>
          <form onSubmit={this.handleDelete}>
            <input type="submit" value=" X " className="Delete"/><br/><br/>
          </form>
            Ticket ID #
            {this.props.id}
            <br />
            {this.props.Title}
            <br />
            {this.props.Priority}
            <br />
            {this.props.Status}
      </div>
    );
  }
}

export default Card;
