import React, { Component } from "react";
import "./Column.css";
import Card from '../../components/Card/';

class Column extends Component {
  constructor() {
    super();

    this._onDragOver = this._onDragOver.bind(this);
    this._onDrop = this._onDrop.bind(this);
  }

  _onDragOver(e) {
    e.preventDefault();
  }

  _onDrop(e) {
    let data = e.dataTransfer.getData('text');
    console.log(data);
  }
  render() {
    const { type, cards } = this.props;
    return (
      <div id={type} onDrop={this._onDrop} onDragOver={this._onDragOver} className="column">
        {cards.map(card => <Card key={card._id} {...card} />)}
      </div>
    )
  }
}

export default Column;
