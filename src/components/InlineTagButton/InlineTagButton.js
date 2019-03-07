import React from 'react';
import styled from 'styled-components';

import { react } from '../../dollar';


export class InlineTagButtonBordered extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  onTagClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    const { children, className } = this.props;

    const classes = react.ifClasses({
      tag: true,
      button: true,
      'is-success': this.state.clicked,
      _: [[className, !!className]],
    });

    return (
      <span className={classes} onClick={this.onTagClick.bind(this)}>
        { children }
      </span>
    );
  }

};

export const InlineTagButton = styled(InlineTagButtonBordered)`
  border: none;
`;
