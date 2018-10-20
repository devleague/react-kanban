import React, { Component } from 'react';
import './App.css';
import Card from './Card.jsx'

class StatusColumns extends Component {

  render() {
    let del = this.props.delete
    let cards = this.props.cards
    console.log('cards', cards)
    return (
      <div className='container-kanban'>
        <div className='colkan'>
        To Do
          {this.props.cards.filter( card => {
            return card.status_id === 1
          }).map( card => 
            <Card delete={ del } card={ card } />
          )}
        </div>
        <div className='colkan'>
        In Progress
          {this.props.cards.filter( card => {
            return card.status_id === 2
          }).map( card => 
            <Card delete={ del } card={ card } />
          )}
        </div>
        <div className='colkan'>
        Complete
          {this.props.cards.filter( card => {
            return card.status_id === 3
          }).map( card => 
            <Card delete={ del } card={ card } />
          )}
        </div>            
      </div>
    )
  };
};

export default StatusColumns;

