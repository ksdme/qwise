import React from 'react';

import { react } from '../../dollar';


export const Question = ({ className, url, alt }) => {

  const classes = react.ifClasses({
    _: [[className, !!className]],
  });

  return (
    <div className={`level ${classes}`}>
      <div className="level-item">
        <img className="image" src={url} alt={alt} />
      </div>
    </div>
  );

};
