/*
Content for 1.1

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0]} {props.exercises[0]}</p>
      <p>{props.parts[1]} {props.exercises[1]}</p>
      <p>{props.parts[2]} {props.exercises[2]}</p>
    </div>
  )
}
*/

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} num={props.parts[0].exercises} />
      <Part name={props.parts[1].name} num={props.parts[1].exercises} />
      <Part name={props.parts[2].name} num={props.parts[2].exercises} />
    </div>
  )
}

const Part = ({name, num}) => {
  return (
    <div>
      <p>{name} {num}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + 
      props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fumdamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;