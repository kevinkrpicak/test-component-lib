import React from "react";
import css from './Button.css';

const Button = (props) => {
  return (
    <button className={css.button}>{props.label} test</button>
  );
}

export default Button;
