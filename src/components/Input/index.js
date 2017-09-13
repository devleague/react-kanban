import React from 'react';

const Input = (props) => {
  const extendedProps = Object.assign({}, props, { kind: props.kind || 'text'})
  return (
    <div>
      {props.label && <span>{props.label}</span>}
      <input {...props} />
    </div>
  );
};

export default Input;
