import React from 'react';

const Field = ({label, value, className}) =>
    <div className>
      {label && label + ': '} {value}
    </div>

export default Field;