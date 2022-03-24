import React from 'react';
import './style.css';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    return new Array(10).fill().map(() => ({
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
