import React from 'react';
import cn from 'classnames';

const Heading = ({ tagName, kind, size, className, ...props}) => {
  const Tag = tagName || 'div';
  const classes = cn(
    'heading',
    kind && `heading-${kind}`,
    size && `heading-${size}`,
    className
  );
  console.log(props)
  return <Tag className={classes} {...props} />;
};

export default Heading;
