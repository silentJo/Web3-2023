import {useState} from 'react'
import Person from "../Person/Person.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number:'040-1234567' ,id: 1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length +1
        }
        const nameExists = persons.some((person) => person.name === newName)
        if(nameExists) {
            const message = `${newName} is already added to phonebook`
            alert(message)
            return
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <Person key={person.id} name={person.name} number={person.number}/>
            )}
        </div>
    )
}

export default App