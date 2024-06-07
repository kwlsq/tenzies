import './App.css'
import Die from './die.jsx'
import React from 'react'

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  function allNewDice() {
    let randomNumbers = []

    for (let i = 0; i < 10; i++) {

      randomNumbers.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i + 1
      })
    }
    return randomNumbers
  }

  function generateNewDice() {
    setDiceNumbers((prevDiceNumbers) => {
      return prevDiceNumbers.map((dice) =>
        dice.isHeld ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
      )
    })
  }

  function holdDice(id) {
    setDiceNumbers((prevDiceNumbers) => {
      return prevDiceNumbers.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    })
  }

  const diceElements = diceNumbers.map((diceNumber) => {
    return <Die
      value={diceNumber.value}
      key={diceNumber.id}
      isHeld={diceNumber.isHeld}
      hold={() => holdDice(diceNumber.id)} />
  })

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={generateNewDice} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
