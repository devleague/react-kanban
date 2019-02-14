import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleAuthorOnChange = this.handleAuthorOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title: value });
  };

  handleAuthorOnChange(e) {
    const value = e.target.value;
    this.setState({ author: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { title, author } = this.state;

    this.props.onAdd({
      title,
      author
    });

    this.props.createCard({
      title,
      author
    });

    this.setState({
      title: '',
      author: ''
    });
  };

  render() {
    return (
      <form>
        <input type="text" data-type="title" onChange={this.handleTitleOnChange} value={this.state.title} />
        <input type="text" data-type="author" onChange={this.handleAuthorOnChange} value={this.state.author} />
        <button onClick={this.handleSubmit}>
          Save Card
        </button>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (card) => {
      dispatch(addCard(card));
    }
  };
};

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;