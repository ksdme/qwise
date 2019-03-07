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
  const { _, ...rest } = map;

  const classes = Object.keys(rest).filter((key) => {
    return map[key] === true;
  });

  if (_) {
    _.forEach((vectorClass) => {
      const [klass, condition] = vectorClass;

      if (condition)
        classes.push(klass);
    });
  }

  return classes.join(' ');
};

export default {
  repacked,
  klass,
  ifClass,
  ifClasses,
};
