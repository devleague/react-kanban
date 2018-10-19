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

const catDivStyle = {
  display: 'grid',
  borderRight: '1px solid gray',
  borderLeft: 'none',
  borderBottom: 'none'
};
/* End Syles */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carditems: [],
      hasItems: true
    }
  }

  handleDelete = (carditems) => {
    this.status_id = carditems.status_id
    this.title = carditems.title
    this.card_id = carditems.card_id
    this.props.setState(this.state)
  }

  render() {
    return (
      <div>
        <header>
        <Top />
        </header>
        <div style={catWrapperDivStyle}>
          <div style={catDivStyle}>
            <Queue items={this.props.items} />
            <button onClick={this.handleDelete} id="delete" type="button">Delete</button>

          </div>
          <div style={catDivStyle}>
            <InProgress items={this.props.items} />
          </div>
          <div style={catDivStyle}>
            <Done items={this.props.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
