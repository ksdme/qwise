import React from 'react';

import { react } from '../../dollar';


export const Button = ({ children, outline, light, info, primary, danger, onClick, className, }) => {

  const classes = react.ifClasses({
    'button': true,
    'has-margin': true,
    'is-light': light,
    'is-info': info,
    'is-danger': danger,
    'is-primary': primary,
    'is-outlined': outline,
    className: !!className,
  });

  return (
    <button className={classes} onClick={onClick}>
      { children }
    </button>
  );

};
