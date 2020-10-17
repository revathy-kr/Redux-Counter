import React from 'react';
import './App.css';
import Counter from './container/CounterContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
