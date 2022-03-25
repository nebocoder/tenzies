import React from 'react';
import './style.css';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    setTenzies(() =>
      dice.every((die) => die.isHeld && die.value === dice[0].value)
    );
  }, [dice]);

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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
