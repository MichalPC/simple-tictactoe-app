import { useState } from 'react';
import { calculateWinner } from './utilities/helper';
import Gameboard from './components/Gameboard/Gameboard';
import './App.css';


function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const currentPlayer = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = currentPlayer;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  }

  const goTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  const showHistory = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to start`;
      return (
        <li key={move}>
          <button onClick={() => goTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Tic-Tac-Toe App</h1>
      </header>
      <main className="main-container">
        <div styleName="gameboard-container">
          <h1 className="player-label">{winner ? "Winner: " + winner: "Next Player:" + currentPlayer}</h1>
          <Gameboard squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <div className="info-container">
          <h1>History</h1>
          <div className="history-container">
            <div className="history-list">
              {showHistory()}
            </div>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <h1>By Michal Cyganek</h1>
      </footer>
    </div>
  );
}

export default App;
