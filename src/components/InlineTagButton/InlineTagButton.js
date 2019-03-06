import React from 'react';
import styled from 'styled-components';

import { react } from '../../dollar';


export const InlineTagButtonBordered = ({  children, className }) => {
  return (
    <span className={`tag button ${react.klass(className)}`}>
      { children }
    </span>
  );
};

export const InlineTagButton = styled(InlineTagButtonBordered)`
  border: none;
`;
