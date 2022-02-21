import React, { useEffect } from 'react'

import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(n => dispatch(setAnecdotes(n)))
  }, [dispatch])
  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App 