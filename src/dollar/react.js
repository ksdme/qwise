import React from 'react';


const repacked = (Klass) => {
  return ({ children }) => (
    <Klass>{ children }</Klass>
  );
};

export default {
  repacked,
};
