import React, { Component } from 'react';

import { QuestionProvider } from './providers/Questions';
import { Section } from './components/Section/Section';
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

            <div class="field is-grouped">
              <p class="control">
                <a class="button is-info is-outlined has-margin">A</a>
              </p>
              <p class="control">
                <a class="button is-info is-outlined has-margin">B</a>
              </p>
              <p class="control">
                <a class="button is-info is-outlined has-margin">C</a>
              </p>
              <p class="control">
                <a class="button is-info is-outlined has-margin">D</a>
              </p>
              <p class="control">
                <a class="button is-primary has-margin">Submit</a>
              </p>
            </div>
          </div>
        </Section>
      </QuestionProvider>
    );
  }
}

export default App;
