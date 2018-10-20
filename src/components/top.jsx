import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import ItemForm from './newTask.jsx';


/* Syles */
const divTobBarStyle = {
  display: 'grid',
  gridTemplateColumns: '10% 80% 10%'
};

const centerspace = {
  backgroundColor: '#343d51',
  fontFamily: 'Geneva',
  fontSize: '12px',
  textAlign: 'right',
  paddingTop: '30px'
};


const divLogoStyle = {
  display: 'grid',
  backgroundColor: '#343d51'
};

const divNewTaskStyle = {
  background: '#343d51',
  paddingRight: '10px'
};

const pLogoStyle = {
  fontFamily: 'Geneva',
  fontSize: '18px',
  textAlign: 'center',
  padding: '10px',
  border: '1px',
  color: 'white'
};

const pNewTaskStyle = {
  fontFamily: 'Geneva',
  fontSize: '12px',
  textAlign: 'center',
  padding: '10px'
  // border: '1px solid white',
  // color: 'white'
};

/* End Syles */


class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carditems: [],
      hasItems: true
    }
  }



addItemTask = (getNewTask) => {
  axios
  .post('/newtask', getNewTask)
      .then(itemsData => {
        console.log("\nitemsData.data:", itemsData.data);
        this.setState({ itemsData: itemsData.data })
      })
      .catch(err => {
        console.log("ERROR", err);
      })  
}

render() {

const Logo = () => (
  <div style={divLogoStyle}>
  <Router>
    <Link to="/"><p style={pLogoStyle}>KANBAN</p></Link>
  </Router>
  </div>
);

const NewTask = () => (
  <div style={divNewTaskStyle}>
    <Router>
    <p style={pNewTaskStyle}>
    <Link to="/newtask">
    <button style={pNewTaskStyle} id="newTask" type="button">+ NEW TASK</button>
    </Link>
    </p>
    </Router>
  </div>
);

const TopBar = () => (
  <div style={divTobBarStyle}>
      <div style={divLogoStyle}>
        <Logo />
      </div>
      <div style={centerspace}>
      <Router>
      <Route path="/newtask" component={() => <ItemForm addItemTask={this.addItemTask} />} />
      </Router>
      </div>  
      <div style={divNewTaskStyle}>
        <NewTask />
      </div>
  </div>  
);

return (
  <div>
    <header>
    <TopBar />
    </header>
  </div>
);
}
}

export default Top;
