import React from 'react';
import css from './Button.module.css';
// import './Button.css';

enum ButtonTypes {
  Button = 'button',
  Div = 'div',
  Span = 'span',
  A = 'a',
}

type ButtonProps = {
  as?: ButtonTypes;
  className?: string;
  label?: string;
  children?: React.ReactNode;
};

const Button = ({
  as = ButtonTypes.Button,
  className,
  label,
  children,
  ...props
}: ButtonProps) => {
  return React.createElement(
    as,
    {
      className: [css.button, className].join(' '),
      ...props,
    },
    children || label
  );
};

export default Button;
