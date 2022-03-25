import React from 'react';
import './style.css';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function allNewDice() {
    return new Array(10).fill().map(() => generateNewDie());
  }

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) => (die.isHeld ? die : generateNewDie()));
    });
  }

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      );
    });
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
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
