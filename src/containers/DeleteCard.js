import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from './App/actions'

class DeleteCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.revisedCardStack(this.props.id);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} >
      <div>
      <button type="submit">Delete Card</button>
      </div>
      </form>
      </div>
      );
  }
}


const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    revisedCardStack: (text) => {
      dispatch(deleteCard(text));
    }
  }
}

DeleteCard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(DeleteCard);

  export default DeleteCard;