import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Navbar from '../../components/Navbar';
import AddCardButton from '../../components/AddCardButton';
import Column from '../Column';
import AddCardForm from '../AddCardForm';
import { STATUS } from '../../actions/constants';
import { fetchCards, fetchAddCard } from '../../actions/cardActions';

class App extends Component {
  constructor() {
    super();

    this.sortCards = this.sortCards.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  sortCards(cards) {
    return cards.cards.reduce(
      (sortedCards, card) => {
        if (card.status === STATUS.QUEUE) {
          sortedCards.inQueue.push(card);
          return sortedCards;
        }

        if (card.status === STATUS.PROGRESS) {
          sortedCards.inProgress.push(card);
          return sortedCards;
        }

        if (card.status === STATUS.DONE) {
          sortedCards.done.push(card);
          return sortedCards;
        }
      },
      { inQueue: [], inProgress: [], done: [] }
    );
  }

  render() {
    const sortedCards = this.sortCards(this.props.cards);
    return (
        <div className="app">
          <Navbar>
            <AddCardButton addCard={this.props.addCard} />
          </Navbar>
          <div className="column-container">
            <Column status={STATUS.QUEUE} cards={sortedCards.inQueue} />
            <Column status={STATUS.PROGRESS} cards={sortedCards.inProgress} />
            <Column status={STATUS.DONE} cards={sortedCards.done} />
          </div>
        <AddCardForm />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return { cards: state }
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchCards: bindActionCreators(fetchCards, dispatch),
    addCard: bindActionCreators(fetchAddCard, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
