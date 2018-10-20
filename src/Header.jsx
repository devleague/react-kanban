import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  constructor(props) {
    super(props) 
    // this.renderAddNew = this.renderAddNew.bind(this)
  }


  render() { 
    return (
      <div className="header">
        <h1>Kanban</h1>
        <button onClick={this.props.toggle}>+ Add New</button>
      </div>
    );
  };
};

export default Header;
