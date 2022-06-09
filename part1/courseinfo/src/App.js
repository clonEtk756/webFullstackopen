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
      <Part name={props.part1.name} num={props.part1.exercises} />
      <Part name={props.part2.name} num={props.part2.exercises} />
      <Part name={props.part3.name} num={props.part3.exercises} />
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
      <p>Number of exercises {props.num}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total num={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;