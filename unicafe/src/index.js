import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistic = ({ text, quantity }) => {
  return (
    <>
      <tr>
        <td>{text}{quantity}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <Statistic text={"good "} quantity={good} />
      <Statistic text={"neutral "} quantity={neutral} />
      <Statistic text={"bad "} quantity={bad} />
      <Statistic text={"all "} quantity={all} />
      <Statistic text={"average "} quantity={average} />
      <Statistic text={"positive "} quantity={positive} />
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  const average = Math.round(((good - bad) / (good + bad)) * 100) / 100;
  const positive = Math.round((good / (good + bad)) * 100);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text={"good"} />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"bad"} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));


