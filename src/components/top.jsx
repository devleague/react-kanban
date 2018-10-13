import React, { Component } from 'react';

/* Syles */
const divTobBarStyle = {
  display: 'grid',
  gridTemplateColumns: '10% 80% 10%'
};

const divLogoStyle = {
  display: 'grid',
  backgroundColor: '#343d51'
};

const divNewTaskStyle = {
  background: '#343d51',
  paddingRight: '10px',
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
  fontSize: '18px',
  textAlign: 'center',
  padding: '10px',
  border: '1px solid white',
  color: 'white'
};

/* End Syles */


class Top extends Component {
  render() {
    const TopBar = () => (
      <div style={divTobBarStyle}>
          <div style={divLogoStyle}>
            <Logo />
          </div>
          <div name="centerspace" style={{backgroundColor: '#343d51'}}>
          </div>  
          <div style={divNewTaskStyle}>
            <NewTask />
          </div>
      </div>  
    );
    
    const Logo = () => (
      <div style={divLogoStyle}>
        <p style={pLogoStyle}>KANBAN</p>
      </div>
    );
    
    const NewTask = () => (
      <div style={divNewTaskStyle}>
        <p style={pNewTaskStyle}>+ New Task</p>
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
