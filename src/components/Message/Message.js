import React from 'react';

import { react } from '../../dollar';


export const Message = ({ children, primary, danger, info }) => {

  const classes = react.ifClasses({
    message: true,
    'is-info': info,
    'is-danger': danger,
    'is-primary': primary,
  });

  return (
    <article className={classes}>
      <div className="message-body">
        { children }
      </div>
    </article>
  );

};
