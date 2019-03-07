import React from 'react';


const repacked = (Klass) => {
  return ({ children }) => (
    <Klass>{ children }</Klass>
  );
};

const klass = (klass) => {
  return klass ? klass : '';
};

const ifClass = (klass, conditional) => {
  return conditional ? klass : '';
};

const ifClasses = (map) => {
  const classes = Object.keys(map).filter((key) => {
    return map[key] === true;
  });

  return classes.join(' ');
};

export default {
  repacked,
  klass,
  ifClass,
  ifClasses,
};
