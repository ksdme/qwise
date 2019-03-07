import React from 'react';

import { QuestionContext } from '../../providers/Questions';
import { InlineTagButton } from '../InlineTagButton/InlineTagButton';
import { InlineTagButtonSet } from '../InlineTagButton/InlineTagButtonSet';


export class AppTags extends React.Component {
  static contextType = QuestionContext;

  render() {
    const questions = this.context;
    const inlineTags = [];

    questions.getAvailableTags().forEach((element) => {
      inlineTags.push((

        <InlineTagButton key={element}>
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
