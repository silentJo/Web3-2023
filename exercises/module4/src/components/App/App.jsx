import {useState} from 'react'
import Person from "../Person/Person.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', id: 1}
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length +1
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <Person key={person.id} name={person.name} />
            )}
        </div>
    )
}

export default App