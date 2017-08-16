import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Column from '../Column';
import AddCardForm from '../AddCardForm';

class App extends Component {
  render() {
    const { in_queue_cards, in_progress_cards, done_cards } = this.props;
    return (
      <div className="app">
        <Column type="in_queue" cards={in_queue_cards}/>
        <Column type="in_progress" cards={in_progress_cards}/>
        <Column type="done" cards={done_cards}/>
        <AddCardForm />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    in_queue_cards: state.cards.in_queue,
    in_progress_cards: state.cards.in_progress,
    done_cards: state.cards.done
  }
}

export default connect(mapStateToProps)(App);
