import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
import { newAdd } from "./notificationReducer"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)



const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const voted = state.find(a => a.id === id)
      const updatedVoteAnecdote = { ...voted, votes: voted.votes + 1 }
      anecdoteService.updateVote(id, updatedVoteAnecdote)
      return state.map(a => a.id !== id ? a : updatedVoteAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})
export const createAnecdote = anecdote => {
  return async dispatch => {
    console.log(anecdote)
    dispatch(appendAnecdote(anecdote))
  }
}
export const initialize = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch(setAnecdotes(anecdotes))
  }
}
console.log(anecdoteSlice.getInitialState())
export const { vote, appendAnecdote, setAnecdotes, setNotification } = anecdoteSlice.actions

export default anecdoteSlice.reducer