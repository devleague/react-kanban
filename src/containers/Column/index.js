import React, { Component } from "react";
import "./Column.css";
import Card from '../../components/Card/';

class Column extends Component {
  render() {
    const { type, cards } = this.props;

    return (
      <div id={type} className="column">
        {cards.map(card => <Card key={card._id} {...card} />)}
      </div>
    )
  }
}

export default Column;
