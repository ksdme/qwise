import React, { Component } from 'react';

import { QuestionProvider } from './providers/Questions';
import { InlineTagButton } from './components/InlineTagButton/InlineTagButton';
import { InlineTagButtonSet } from './components/InlineTagButton/InlineTagButtonSet';


class App extends Component {
  render() {
    return (
      <QuestionProvider>
        <div className="App">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
        </div>

        <InlineTagButtonSet>
          <InlineTagButton>Hello!</InlineTagButton>
          <InlineTagButton>THis!</InlineTagButton>
          <InlineTagButton>Is!</InlineTagButton>
          <InlineTagButton>Me!</InlineTagButton>
        </InlineTagButtonSet>
      </QuestionProvider>
    );
  }
}

export default App;
