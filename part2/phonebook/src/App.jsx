import { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

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

    if (newName === '' || newNumber === '') {
      alert(`Please include both name and number`)
      return
    }

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already in the phonebook, 
        would you like to replace the number with the new one?`)) {
        const person = persons.find(person => person.name === newName)
        const updatedPerson = { ...person, number: newNumber }

        personService.update(person.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id
              ? returnedPerson
              : person
            ))

            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(`Failed to update ${newName}`)
          })
      } else {
        return
      }
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
        setErrorMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setErrorMessage(null)
        },5000)
      })
      .catch(error => {
        alert(`Failed to create ${newName}`)
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id == id)

    if (window.confirm(`Would you like to delete ${person.name}`)) {
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
      <Notification message={errorMessage}/>
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