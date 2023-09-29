import { useState } from 'react'
import Button from "../Button/Button.jsx";
import Statistics from "../Statistic/Statistics.jsx";

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad
    const average = (good - bad)/all
    const positive = (good / all) * 100

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>Give feedback</h1>
                <Button handleClick={() => setGood(good + 1)} text='Good' />
                <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
                <Button handleClick={() => setBad(bad + 1)} text='Bad' />
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='Bad' />
          <h1>Statistics</h1>
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive} />
      </div>
  )
}

export default App