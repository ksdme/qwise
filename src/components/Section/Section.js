import React from 'react';


export const Section = ({ children, medium, large }) => (
  <div className={`section ${medium ? 'is-medium' : ''} ${large ? 'is-large': ''}`}>
    { children }
  </div>
);
