import React from 'react';
import PropTypes from 'prop-types';

import { InlineTagButton } from '../InlineTagButton/InlineTagButton';
import { InlineTagButtonSet } from '../InlineTagButton/InlineTagButtonSet';


export class AppTags extends React.Component {

  constructor() {
    super();
    this.tags = new Set();
  }

  tagSelection(enabled, tag) {
    const { onTagSetChanged } = this.props;

    if (enabled)
      this.tags.add(tag);

    else
      this.tags.delete(tag);

    onTagSetChanged(this.tags);
  }

  render() {
    const inlineTags = [];

    const onClickTag = (element) => {
      return (enabled) => this.tagSelection(enabled, element);
    };

    this.props.tags.forEach((element) => {
      inlineTags.push((

        <InlineTagButton key={element} onClick={onClickTag(element)}>
          { element }
        </InlineTagButton>

      ));
    });

    return (
      <InlineTagButtonSet centered>
        { inlineTags }
      </InlineTagButtonSet>
    );
  }

}

AppTags.propTypes = {
  onTagSetChanged: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AppTags.defaultProps = {
  tags: [],
}
