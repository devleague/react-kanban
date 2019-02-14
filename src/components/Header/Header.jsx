import React from 'react';
import './Header.css'
import AddCard from '../../containers/AddCard';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div className="title">{title}</div>
      <AddCard />
    </header>
  );
};

export default Header;