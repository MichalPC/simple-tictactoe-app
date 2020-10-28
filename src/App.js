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
    <div className="App">
      <header className="app-header">
        <h1>simple tic-tac-toe app</h1>
      </header>
      <main className="main-container">
        <div styleName="gameboard-container">
          <Gameboard squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <label>{winner ? "Winner: " + winner: "Next Player:" + currentPlayer}</label>
        <div className="info-container">
          <label>History</label>
          {showHistory()}
        </div>
      </main>
    </div>
  );
}

export default App;
