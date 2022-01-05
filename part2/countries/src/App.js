import React, { useState, useEffect } from "react";
import axios from 'axios'
import Display from './components/Display'

const App = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() =>
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            }), [])

    const HandleTextChange = (event) => {
        setSearch(event.target.value)
    }
    
    return (
        <div>
            find countries <input onChange={HandleTextChange}/>
            <Display countries={countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))}/>
        </div>
    )

}
export default App