import React from 'react';

import { react } from '../../dollar';


export const InlineTagButtonSet = ({ children, className, centered }) => {
  const classes = react.ifClasses({
    tags: true,
    'is-centered': centered,
    _: [[className, !!className]],
  });

  return (
    <div className={classes}>
      { children }
    </div>
  );
};
