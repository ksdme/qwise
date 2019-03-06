import React from 'react';
import styled from 'styled-components';


export const InlineTagButtonBordered = ({  children, className, }) => {
  return (
    <span className={`tag button ${className}`}>
      { children }
    </span>
  );
};

export const InlineTagButton = styled(InlineTagButtonBordered)`
  border: none;
`;
