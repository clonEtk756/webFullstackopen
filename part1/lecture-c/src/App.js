import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(0)

  const Display = ({ counter }) => <div>{counter}</div>

  const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }

  return (
    <div>
      <Display counter={counter}/>

    <Button
      onClick={increaseByOne}
      text='plus'
    />
    <Button
      onClick={decreaseByOne}
      text='minus'
    />
    <Button
      onClick={resetToZero}
      text='reset'
    />
    </div>
  )
}

export default App;
