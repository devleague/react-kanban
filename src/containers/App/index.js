import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Column from '../Column';
import AddCardForm from '../AddCardForm';
import { STATUS } from '../../actions/constants';

class App extends Component {
  constructor() {
    super();

    this.sortCards = this.sortCards.bind(this);
  }

  sortCards(cards) {
    return cards.reduce(
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
      <div>
        <div className="app">
          <Column type={STATUS.QUEUE} cards={sortedCards.inQueue} />
          <Column type={STATUS.PROGRESS} cards={sortedCards.inProgress} />
          <Column type={STATUS.DONE} cards={sortedCards.done} />
        </div>
        <AddCardForm />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(mapStateToProps)(App);
