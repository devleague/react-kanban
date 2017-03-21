import React, {Component} from 'react';
import Header from '../header/header';
import Board from '../board/board';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<Board />
      </div>
    );
  }
}

export default App;
