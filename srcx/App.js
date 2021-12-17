import React, { useState } from 'react'

const Persons = ({persons}) => {
  
  return (persons.map(p => <p key={p.name}>{p.name} {p.number}</p>))
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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
      console.log(persons[0].name)
      console.log(newName)
      console.log(persons[0].name === newName)
      console.log('test')
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
      <h3>Add a new</h3>
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
      <h3>Numbers</h3>
      <Persons persons={persons}/>
    </div>
  )
}

export default App