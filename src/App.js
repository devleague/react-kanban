import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// import Card from './Card.jsx'
// import Statuses from './Statuses.jsx'
import Cards from './Cards.jsx'
import { getAllCards } from './actions/actions.js'
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: ''
    };
  }


  // addCardToInvenCards = (card) => {
  //   console.log('card', card)
  // }
  componentDidMount() {
    this.props.getAllCards()
    console.log('this.props', this.props)

  }

  render() {

    return (

      // <Router>
      //   {/* <CardList cards={this.state} /> */}
      //   <div className="App">
      //     <header className="App-header">
      //       <Link className="App-title" to="/cards">kanban</Link>
      //       {/* <Link className="App-title" to="/user">Character</Link> */}
      //       <Link className="App-title" to="/cards/123">new task</Link>
      //     </header>
      //     <Route path="/cards" component={Card} />
      //     {/* <Route path="/card" component={Card} /> */}
      //     <Route path="/cards/:id" component={Statuses} />
      //   </div>
      // </Router>
      <div class='App'>
        <Cards props={this.state.card} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});
// function mapStateToProps(state) {
//   // console.log('$$$$$$$', state)
//   cards: state.cards
// }

const mapDispatchToProps = dispatch => ({
  getAllCards: () => dispatch(getAllCards)
})


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
