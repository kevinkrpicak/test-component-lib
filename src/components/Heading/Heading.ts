import React from 'react';
import css from './Heading.module.css';
// import './Heading.css';

enum HeadingTypes {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

type HeadingProps = {
  as?: HeadingTypes;
  className?: string;
  label?: string;
  children?: React.ReactNode;
};

const Heading = ({
  as = HeadingTypes.H1,
  className,
  label,
  children,
  ...props
}: HeadingProps) => {
  return React.createElement(
    as,
    {
      className: [css[as], className].join(' '),
      ...props,
    },
    children || label
  );
};

export default Heading;
