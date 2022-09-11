import React from 'react';
import css from './Heading.css';

const Heading = ({ as, className, label, children, ...props }) => {
  const acceptedTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const tag = (acceptedTypes.includes(as) && as) || 'h1';

  return React.createElement(
    tag,
    {
      className: [css[tag], className].join(' '),
      ...props,
    },
    children || label
  );
};

export default Heading;
