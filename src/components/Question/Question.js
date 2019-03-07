import React from 'react';


export const Question = ({ url, alt }) => {

  return (
    <div className="container">
      <img src={url} alt={alt} />
    </div>
  );

};
