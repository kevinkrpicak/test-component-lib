import React from 'react';
import css from './Button.css';

const Button = ({ as, className, label, children, ...props }) => {
  const acceptedTypes = ['div', 'span', 'a'];
  const tag = (acceptedTypes.includes(as) && as) || 'button';

  return React.createElement(
    tag,
    {
      className: [css.button, className].join(' '),
      ...props,
    },
    children || label
  );
  //   (
  //     <button {...props} className={[css.button, props.className].join(' ')}>{props.children}</button>
  //   );
};

export default Button;
