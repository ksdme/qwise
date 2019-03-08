import React from 'react';
import PropTypes from 'prop-types';
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
    let { onClick } = this.props;
    if (!onClick) onClick = () => {};

    this.setState({
      clicked: !this.state.clicked,
    });

    // Indicates if the tag is selected
    // hence is a negated value
    onClick(!this.state.clicked);
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

InlineTagButtonBordered.propTypes = {
  onClick: PropTypes.func,
};

InlineTagButton.propTypes = InlineTagButtonBordered.propTypes;
