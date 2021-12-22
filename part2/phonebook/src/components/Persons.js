import React from 'react'

const Persons = ({ persons, keyword }) => {
    console.log(keyword)

    return (
        <div>
            {persons.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()))
                .map((p) => (
                    <li style={{ listStyle: 'none' }} key={p.id}>
                        {p.name} {p.number}
                    </li>
                ))}
        </div>
    )
}

export default Persons