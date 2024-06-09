import './App.css'
import Die from './die.jsx'
import React from 'react'
import Confetti from 'react-confetti'

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

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
    if (tenzies) {
      setTenzies(false)
      setDiceNumbers(allNewDice())
    } else {
      setDiceNumbers((prevDiceNumbers) => {
        return prevDiceNumbers.map((dice) =>
          dice.isHeld ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
        )
      })
    }
  }

  function holdDice(id) {
    setDiceNumbers((prevDiceNumbers) => {
      return prevDiceNumbers.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    })
  }

  React.useEffect(() => {
    const heldDice = diceNumbers.every(die => die.isHeld)


    const anchorvalue = diceNumbers[0].value

    const allSameDice = diceNumbers.every(die => die.value === anchorvalue)
    if (heldDice && allSameDice) {
      setTenzies(true)

    } else {
      setTenzies(false)
    }

  }, [diceNumbers])

  const diceElements = diceNumbers.map((diceNumber) => {
    return <Die
      value={diceNumber.value}
      key={diceNumber.id}
      isHeld={diceNumber.isHeld}
      hold={() => holdDice(diceNumber.id)} />
  })

  return (
    <main>
      {tenzies && <Confetti />}
      <div className='instruction-wrapper'>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>

      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={generateNewDice} className='btn-roll'>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}

export default App
