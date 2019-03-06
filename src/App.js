import React, { Component } from 'react';

import { QuestionProvider } from './providers/Questions';


class App extends Component {
  render() {
    return (
      <QuestionProvider>
        <div className="App">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
        </div>
      </QuestionProvider>
    );
  }
}

export default App;
