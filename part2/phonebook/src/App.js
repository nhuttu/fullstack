import React, { useState } from 'react'
import Persons from './components/Persons'
import Filterbar from './components/Filterbar'
import PersonForm from './components/PersonForm'

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


export default App