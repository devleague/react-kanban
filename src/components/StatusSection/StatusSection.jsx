import React from 'react';
import './StatusSection.scss';
import CardList from '../CardList';

const StatusSection = (props) => {
  const { title, cards } = props;
  return (
    <div className='statusContainer' id={title}>
      <div className='containerTitle'>
        <div className="title">
          {title}
        </div>
      </div>
      <CardList cards={cards} showCard={props.showCard} />
    </div>
  );
};

export default StatusSection;