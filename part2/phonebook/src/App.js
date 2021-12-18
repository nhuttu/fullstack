import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleTextChange = (event) => {
    setNewSearch(event.target.value)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(p => p.name === newName)) {
      setNewName('')
      return window.alert(`${newName} is already added to phonebook`

      )
    }

    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filterbar handleTextChange={handleTextChange} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} handleNumberChange={handleNumberChange} handleNoteChange={handleNoteChange} newName={newName} newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} keyword={newSearch} />
    </div>
  )
}

const PersonForm = ({ addName, handleNumberChange, handleNoteChange, newName, newNumber }) => {
  return (
    <div>

      <form onSubmit={addName}>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          name: <input onChange={handleNoteChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Filterbar = ({ handleTextChange }) => {
  return (
    <div>
      filter shown with <input onChange={handleTextChange} />
    </div>
  )
}

const Persons = ({ persons, keyword }) => {
  console.log(keyword)

  return (
    <div>
      {persons.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()))
        .map((p) => (
          <li style={{ listStyle: 'none' }} key={p.name}>
            {p.name} {p.number}
          </li>
        ))}
    </div>
  )
}

export default App