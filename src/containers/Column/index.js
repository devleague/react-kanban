import React, { Component } from 'react';
import './Column.css';
import Card from '../../components/Card/';
import AddCardForm from '../AddCardForm';
import AddCardButton from '../../components/AddCardButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoveCard } from '../../actions/cardActions';

class Column extends Component {
  constructor() {
    super();

    this.state = {
      isDisplayingAddForm: false
    };

    this._onDragOver = this._onDragOver.bind(this);
    this._onDrop = this._onDrop.bind(this);

    this.displayAddForm = this.displayAddForm.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
  }

  _onDragOver(e) {
    e.preventDefault();
  }

  _onDrop(e) {
    const cardId = e.dataTransfer.getData('text');
    this.props.moveCard(cardId, this.props.status);
  }

  displayAddForm() {
    this.setState({
      isDisplayingAddForm: true
    });
  }

  hideAddForm() {
    this.setState({
      isDisplayingAddForm: false
    });
  }

  render() {
    const { status, cards } = this.props;
    const { isDisplayingAddForm } = this.state;
    return (
      <div
        id={status}
        onDrop={this._onDrop}
        onDragOver={this._onDragOver}
        className="column"
      >
        {cards.map(card => <Card key={card._id} {...card} />)}
        {isDisplayingAddForm ? (
          <AddCardForm hideAddForm={this.hideAddForm} status={status}/>
        ) : (
          <AddCardButton displayAddForm={this.displayAddForm} />
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    moveCard: bindActionCreators(fetchMoveCard, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Column);
