import React, {Component} from 'react';
import Board from './components/board';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           Crosswords Puzzle Game
          </p>
          <p className="small-text">Built with React..</p>
        </header>
        <div className="board">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
