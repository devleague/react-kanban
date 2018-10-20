import React, { Component } from 'react';
import './App.css';


class Card extends Component {
  constructor(props) {
    super(props)
  }

  // delete = (card) => {
  //   console.log('delete', card)
  // }

  render() {
      let card = this.props.card
    return (
      <div className="card"><div className='cardtitle'>
            <h2>{card.title}</h2>
            <div className='prio'>
                Priority: {card.priority_id}
            </div>
        </div>
        <div>{card.body}</div>
        <div className='carddetail'>
                <div className='assigned'>
                  <i className='fas fa-user'></i> {card.assigned_to}
                  <div onClick={ () => this.props.delete(card)}>
                    <i className="far fa-trash-alt trash"></i>
                  </div>
                </div>
        </div>
      </div>
    );
  };
};

export default Card;
