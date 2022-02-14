import React from "react";
import { useDispatch, useSelector } from "react-redux";
const AnecdoteList = () => {
    const vote = id => {
        return ({
            type: 'VOTE',
            data: { id }

        })
    }
    const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()
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
                            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AnecdoteList