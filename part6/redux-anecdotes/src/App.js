import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createAnecdote} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    return ({
      type: 'VOTE',
      data: { id }

    })
  }
  const newAnecdote = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    const content = event.target.anecdote.value
    console.log(content)
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }



  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App