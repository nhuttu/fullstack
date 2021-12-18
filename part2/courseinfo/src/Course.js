import React from 'react'
import Part from './Part'

const Course = ({course}) => {

  const Content = ({ course }) => {
    console.log(course.parts)
    return (
      <div>{course.parts.map(parts => <Part key={parts.id} parts={parts}/>)}</div>
    )
  } 
  const Header = ({ course }) => {
    console.log(course)
    return (
      <h1>{course.name}</h1>
    )
  }
  const Total = ({ course }) => {
    const sum = (s, p) =>  s + p;
    const mapped = course.parts.map(a => a.exercises)
    
    return(
      <b>total of exercises {mapped.reduce(sum)}</b>
    ) 
  }
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
export default Course