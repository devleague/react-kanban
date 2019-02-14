import React from 'react';
import './Header.scss'

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div className="title">{title}</div>
      <div className="addBtn" onClick={props.show}>Add Card</div>
    </header>
  );
};

export default Header;