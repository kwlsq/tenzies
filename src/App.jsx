import './App.css'
import Die from './die.jsx'

function App() {
  const value = [1]
  return (
    <main>
      <div className='dice-container'>
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
        <Die value={value} />
      </div>
    </main>
  )
}

export default App
