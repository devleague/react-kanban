import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Top from './components/top.jsx';
import Queue from './components/queue.jsx';
import InProgress from './components/inProgress.jsx';
import Done from './components/done.jsx';

/* Syles */
const catWrapperDivStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
};
/* End Syles */

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <Top />
        </header>
        <div style={catWrapperDivStyle}>
          <Queue />
          <InProgress />
          <Done />
        </div>
      </div>
    );
  }
}

export default App;
