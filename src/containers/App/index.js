import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Navbar from '../../components/Navbar';
import Column from '../Column';
import AddCardForm from '../AddCardForm';
import { STATUS } from '../../actions/constants';
import { fetchCards } from '../../actions/asyncCardActions';

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
            <h2>asdf</h2>
          </Navbar>
          <div className="column-container">
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
  return { cards: state }
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchCards: bindActionCreators(fetchCards, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
