import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { newVote, removeNoti } from "../reducers/notificationReducer";
const AnecdoteList = () => {    
    const anecdotes = useSelector(state => state.anecdotes).map(a => a).sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()
    const voted = anecdote => {
        dispatch(vote(anecdote.id))
        dispatch(newVote(anecdote.content))
        setTimeout(() => {
            dispatch(removeNoti())
        }, 5000)
    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => voted(anecdote)}>vote</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AnecdoteList