import React from 'react';

import { react } from '../../dollar';


export const InlineTagButtonSet = ({ children, className, centered }) => (
  <div className={`tags ${centered ? 'is-centered' : ''} ${react.klass(className)}`}>{ children }</div>
);
