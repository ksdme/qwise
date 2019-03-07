import React from 'react';

import { react } from '../../dollar';


export const Section = ({ children, medium, large }) => {

  const classes = react.ifClasses({
    section: true,
    'is-large': large,
    'is-medium': medium,
  });

  return (
    <div className={classes}>
      { children }
    </div>
  );

};
