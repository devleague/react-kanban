import React from 'react';
import Card from './Card';

const CardList = React.createClass({
  render: function() {
    const status = this.props.status;
    const cards = this.props.data
      .filter(function (card, index) {
        return card.Status === status;
      })
      .sort(function(cardA, cardB) {
        return cardB.Priority - cardA.Priority;
      })
      .map(card => {
        return (
          <Card
            key={card.id}
            id={card.id}
            Title={card.Title}
            Priority={card.Priority}
            Status={card.Status}
            CreatedBy={card.CreatedBy}
            AssignedTo={card.AssignedTo}
            handleDelete={this.props.deleteCard}
            handleEdit={this.props.editCard}
            handleDone={this.props.doneCard}
          >
          </Card>
        );
      })
    return (
      <div className="cardList">
        { cards }
      </div>
    );
  }
});

export default CardList;