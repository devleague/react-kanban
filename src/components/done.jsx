import React, { Component } from 'react';

/* Syles */

const catDivStyle = {
  display: 'grid',
  // padding: '100px',
  // height: '900px'
  borderRight: '1px solid gray',
  borderLeft: '1px solid white',
  borderBottom: '1px solid white'
};

const pCatStyle = {
  fontFamily: 'Geneva',
  fontSize: '16px',
  textAlign: 'center',
  color: 'gray'
};

const doneCardStyles = {
  display: 'grid',
  padding: '10px',
  backgroundColor: '#3fbbff',
  border: '2px solid black',
  borderRadius: '10px',
  boxShadow: '5px 10px 5px #888888'
};

const items = {
  borderRadius: '10px'
};


/* End Syles */


class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
          {
            id: 1,
            description: 'Make Better Styles.',
            priority: 'Medium',
            by: 'Jon',
            to: 'Renee'
          },
          {
            id: 2,
            description: 'Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
            priority: 'Medium',
            by: 'Jon',
            to: 'Renee'
          }
      ]
    }
  }

  render() {
    const Section = () => (
        <div style={catDivStyle}>
        <p style={pCatStyle}>DONE</p>
        <div style={{padding: '40px'}}>
          <div style={doneCardStyles}>
          {this.state.items.map( item => <div style={items}>{item.description}</div> )}
              {this.state.items.map( item => <div style={items}>{item.priority}</div> )}
              {this.state.items.map( item => <div style={items}>{item.by}</div> )}
              {this.state.items.map( item => <div style={items}>{item.to}</div> )}
          </div>
        </div>
        </div>
    );
    
    
    return (
      <div>
        <Section />
      </div>
    );
  }
}



export default Done;
