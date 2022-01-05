import React from 'react'
import Indepth from './Indepth'
import { useState } from 'react'

const Filter = ({ countries }) => {
    const [Show, setShow] = useState(false)
    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    if (countries.length === 1) {
        const country = countries[0]
        return (
            <Indepth country={country} />
        )
    }
   
    return (
        <div > 
            {countries.map(c => <li style={{ listStyle: 'none' }} key={c.capital}>
                {c.name.common}
                <button onClick={() => console.log('cant figure it out')}>show</button>
            </li>)}
        </div>


    )
}
export default Filter