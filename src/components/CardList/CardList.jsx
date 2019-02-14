import React from 'react';
import Card from '../Card';

const CardList = (props) => {
  const cardList = props.cards.map((card) => {
    return (
      <Card key={card.id}
        title={card.title}
        body={card.body}
        priority_id={card.priority_id}
        status_id={card.status_id}
        created_by={card.created_by}
        assigned_to={card.assigned_to}
      />
    );
  });

  return (
    <>
      {cardList}
    </>
  )
}

export default CardList;