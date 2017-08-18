import React from 'react';

const AddCardButton = ({ addCard }) =>
  <button onClick={() => addCard() }><h1>add card</h1></button>

export default AddCardButton;