import React from 'react';
import styled from 'styled-components';

import { react } from '../../dollar';


export const InlineTagButtonBordered = ({ children, className }) => {
  const classes = react.ifClasses({
    tag: true,
    button: true,
    _: [[className, !!className]],
  });

  return (
    <span className={classes}>
      { children }
    </span>
  );
};

export const InlineTagButton = styled(InlineTagButtonBordered)`
  border: none;
`;
