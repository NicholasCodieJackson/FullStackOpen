import { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`) 
      return
    } 

    if (newName === '' || newNumber === ''){
      alert(`Please include both name and number`) 
      return
    }

    const newPerson = {
        name: newName,
        number: newNumber
      }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id == id)

    if(window.confirm(`Would you like to delete ${person.name}`)){
      personService
      .remove(id)
      .then(() => {
        alert(`${person.name} has been deleted`)
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch(error => {
        alert(`${person.name} could not be found`)
      })
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        label="Filter by name: "
        value={nameSearch} 
        onChange={handleNameFilterChange}
      />

      <h3>Add new entry</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons}
        nameSearch={nameSearch}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App