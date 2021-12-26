import React from 'react'

const Indepth = ( {country} ) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
            {Object.entries(country.languages).map( ([key, value])  => <li key={key}>{value}</li>)}
            </ul>
            <img src={country.flags.png}/>
            </div>
    )
}
export default Indepth