import React, { Component } from "react";
import "./Column.css";
import Card from '../../components/Card/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoveCard } from '../../actions/cardActions';

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
    const cardId = e.dataTransfer.getData('text');
    this.props.moveCard(cardId, this.props.type);
    console.log(cardId);
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

export const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: bindActionCreators(fetchMoveCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Column);
