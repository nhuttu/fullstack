import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
  }
  const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }
  const Part = (props) => {
    return (
      <p>
        {props.text} {props.exercises}
      </p>
    )

  }
  const Content = (props) => {
    return (
      <div>
        <Part text={props.part1} exercises={props.exercise1}/>
        <Part text={props.part2} exercises={props.exercise2}/>
        <Part text={props.part3} exercises={props.exercise3}/>

      </div>
    )
  }
  const Total = (props) => {
    return (
      <p>{props.exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course['name']}/>
      <Content part1={course['parts'][0]['name']} exercise1={course['parts'][0]['exercises']} part2={course['parts'][1]['name']} exercise2={course['parts'][1]['exercises']} part3={course['parts'][2]['name']} exercise3={course['parts'][2]['exercises']}/>
      <Total exercises={course['parts'][0]['exercises']+course['parts'][1]['exercises']+course['parts'][2]['exercises']}/>
    </div>
  )
}
export default App