import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.name}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if(total === 0){
    return (
      <div>
        <h2>Statistics</h2>
        <p>NO FEEDBACK DATA AVAILABLE</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {((good) / total) * 100} %</p>
    </div>
  )
}

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} name="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} name="neutral"/>
      <Button onClick={() => setBad(bad + 1)} name="bad"/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
