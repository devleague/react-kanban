import React from 'react';
import './StatusSection.css';
import CardList from '../CardList';

const StatusSection = (props) => {
  const { title, cards } = props;
  return (
    <div className='statusContainer' id={title}>
      <div className='containerTitle'>{title}</div>
      <CardList cards={cards} />
    </div>
  );
};

export default StatusSection;