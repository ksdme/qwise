import React from 'react';

import { react } from '../../dollar';


export const Button = ({ children, outline, info, primary, onClick, className, }) => {

  const classes = react.ifClasses({
    'button': true,
    'has-margin': true,
    'is-info': info,
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
