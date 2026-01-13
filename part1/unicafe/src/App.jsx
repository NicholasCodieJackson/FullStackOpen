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

      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>

      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={(good - bad) / total}/>
      <StatisticLine text="positive" value={((good) / total) * 100}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if(text === "positive") return <p>{text}: {value}%</p>

  return (
    <p>{text}: {value}</p>
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
