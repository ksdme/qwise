import React from 'react';


const repacked = (Klass) => {
  return ({ children }) => (
    <Klass>{ children }</Klass>
  );
};

const klass = (klass) => {
  return klass ? klass : '';
};

export default {
  repacked,
  klass,
};
