import './Question.css';

import React from 'react';

import { react } from '../../dollar';


export const Question = ({ className, url, alt, sixty }) => {

  const classes = react.ifClasses({
    _: [[className, !!className]],
  });

  const imgClasses = react.ifClasses({
    'image': true,
    'width-60': sixty,
  });

  return (
    <div className={`level ${classes}`}>
      <div className="level-item">
        <img className={imgClasses} src={url} alt={alt} />
      </div>
    </div>
  );

};
