import React, { Component } from 'react';

import { QuestionProvider } from './providers/Questions';
import { Section } from './components/Section/Section';
import { OptionPanel } from './components/Options/OptionPanel';
import { InlineTagButton } from './components/InlineTagButton/InlineTagButton';
import { InlineTagButtonSet } from './components/InlineTagButton/InlineTagButtonSet';


class App extends Component {
  render() {
    return (
      <QuestionProvider>
        <Section>
          <div className="container is-centered">
            <InlineTagButtonSet centered>
              <InlineTagButton>Hello</InlineTagButton>
              <InlineTagButton>World</InlineTagButton>
              <InlineTagButton>This</InlineTagButton>
              <InlineTagButton>is</InlineTagButton>
              <InlineTagButton>me!</InlineTagButton>
            </InlineTagButtonSet>

            <OptionPanel />
          </div>
        </Section>
      </QuestionProvider>
    );
  }
}

export default App;
