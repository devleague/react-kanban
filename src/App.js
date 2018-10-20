import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import Top from './components/top.jsx';
import Queue from './components/queue.jsx';
import InProgress from './components/inProgress.jsx';
import Done from './components/done.jsx';

/* Syles */
const catWrapperDivStyle = {
  backgroundColor: '#d1d7da',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
};

const catDivStyle = {
  display: 'grid',
  borderRight: '3px solid gray',
  borderLeft: '3px solid gray',
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
    // this.handleDelete = this.handleDelete.bind(this)
  }

// removeItemTask = (item) => {

//   axios
//     .delete('/delete', item)
//     .then(item => {
//       console.log('DELETE FROM AXIOS', item)
//     })
//     .catch(err => {
//       console.log('AXIOS DELETE ERROR: ', err)
//     })
// }  


//   handleDelete = (carditems) => {
//     this.card_id = carditems.card_id
//     console.log("delete me!!!")
//   }

  
  render() {
    return (
      <div>
        <header>
        <Top />
        </header>
        <div style={catWrapperDivStyle}>
          <div style={catDivStyle}>
            <Queue items={this.props.items} />
            {/* <button onClick={this.handleDelete} id="delete" type="button">Delete</button> */}
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
////// BACK UP /////
