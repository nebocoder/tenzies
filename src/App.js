import React from 'react';
import './style.css';
import Die from './Die';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    return new Array(10).fill().map(() => Math.floor(Math.random() * 6) + 1);
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
