import React, { useState } from 'react'

const App = () => {
  const [good, setgood] = useState(0)
  const [bad, setbad] = useState(0)
  const [neutral, setneutral] = useState(0)
  const all = neutral + bad + good
  const average = (good - bad) / all
  const positive = good / all

  const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value} {props.text2}</td></tr>

  const Statistic = (props) => {
    if (props.all === 0) {
      return (
        <div>
          no feedback given
        </div>
      )
    }
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" text2="%" value={props.positive * 100} />
        </tbody>

      </table>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setgood(good + 1)}>
        good
      </button>
      <button onClick={() => setneutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setbad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistic good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />

    </div>
  )
}


export default App