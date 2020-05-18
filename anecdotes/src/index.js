import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const BestAnecdote = ({ votes, anecdotes }) => {
  let i = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>{anecdotes[i]}</div>
      <div>has {votes[i]} votes</div>
    </div>
  )
}

const App = (props) => {
  const random = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [selected, setSelected] = useState(random(props.anecdotes.length))
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))


  const vote = (selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy)
  }

  const handleClick = () => {
    setSelected(random(props.anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <br />
      <Button handleClick={() => vote(selected)} text="vote" />
      <br />
      <Button handleClick={handleClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <BestAnecdote votes={votes} anecdotes={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)