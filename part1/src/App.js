const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Katya'
  const age = 21

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Gosha" age={10 + 9} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App