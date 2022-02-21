import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { newAdd, removeNoti } from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log(content)
        event.target.anecdote.value = ''
        const newAnec = await anecdoteService.createNew(content)
        console.log(newAnec + ' anecdoteform')
        dispatch(createAnecdote(newAnec))
        dispatch(newAdd(content))

        setTimeout(() => {
            dispatch(removeNoti())
        }, 5000)
    }       
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm